// For Pages Router: pages/api/health.js
export default function handler(req, res) {
    res.status(200).json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.ENVIRONMENT || 'production',
      branch: process.env.BRANCH || 'unknown'
    })
  }
  
  // For App Router: app/api/health/route.js  
  // export async function GET() {
  //   return Response.json({ 
  //     status: 'ok', 
  //     timestamp: new Date().toISOString(),
  //     uptime: process.uptime(),
  //     environment: process.env.ENVIRONMENT || 'production',
  //     branch: process.env.BRANCH || 'unknown'
  //   })
  // }