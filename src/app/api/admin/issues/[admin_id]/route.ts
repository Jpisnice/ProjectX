import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Database connection setup
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projectx'
});

// Helper function to fetch issues based on admin_id
const getIssuesByAdmin = async (adminId: number) => {
    const connection = await pool.getConnection();

    try {
        // Query to fetch the role of the admin and their responsibilities
        const [adminRole]: [any[], any] = await connection.query(
            'SELECT role, ward_id, mla_id FROM admins WHERE id = ?',
            [adminId]
        );

        if (adminRole.length === 0) {
            return [];
        }

        const { role, ward_id, mla_id } = adminRole[0];
        let issuesQuery = '';
        let issuesParams: any[] = [];

        // Construct query based on the admin's role
        if (role === 'Panch') {
            // Panch sees only issues in their assigned ward
            issuesQuery = `
                SELECT i.id, i.title, i.description, i.location, i.resolved, w.name AS ward
                FROM issues i
                INNER JOIN wards w ON i.ward_id = w.id
                WHERE i.ward_id = ?
            `;
            issuesParams = [ward_id];
        } else if (role === 'Sarpanch') {
            // Sarpanch sees issues in their ward and those of their Panches
            issuesQuery = `
                SELECT i.id, i.title, i.description, i.location, i.resolved, w.name AS ward
                FROM issues i
                INNER JOIN wards w ON i.ward_id = w.id
                WHERE i.ward_id = ? OR i.ward_id IN (
                    SELECT id FROM wards WHERE admin_id = ?
                )
            `;
            issuesParams = [ward_id, adminId];
        } else if (role === 'MLA') {
            // MLA sees issues in all wards they are responsible for and those of their Sarpanches and Panches
            issuesQuery = `
                SELECT i.id, i.title, i.description, i.location, i.resolved, w.name AS ward
                FROM issues i
                INNER JOIN wards w ON i.ward_id = w.id
                WHERE w.admin_id IN (
                    SELECT id FROM admins WHERE mla_id = ? 
                    UNION
                    SELECT id FROM admins WHERE id IN (
                        SELECT admin_id FROM wards WHERE id IN (
                            SELECT ward_id FROM issues
                        )
                    )
                )
            `;
            issuesParams = [adminId];
        } else {
            return []; // In case the role is not recognized
        }

        const [issues]: [any[], any] = await connection.query(issuesQuery, issuesParams);
        return issues;
    } finally {
        connection.release();
    }
};

// Next.js API route handler
export async function GET(
    request: Request,
    { params }: { params: { admin_id: string } }
) {
    const adminId = parseInt(params.admin_id, 10);

    if (isNaN(adminId) || adminId <= 0) {
        return NextResponse.json({ error: 'Invalid admin_id parameter' }, { status: 400 });
    }

    try {
        const issues = await getIssuesByAdmin(adminId);

        return NextResponse.json({ issues });
    } catch (error) {
        console.error('Error fetching issues:', error);
        return NextResponse.json({ error: 'Failed to fetch issues' }, { status: 500 });
    }
}
