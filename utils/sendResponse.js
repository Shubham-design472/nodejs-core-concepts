
export function sendResponse(res,statusCode,ContentType,payload)
{
res.statusCode=statusCode
res.setHeader('Content-Type',ContentType)
//res.writeHead(200,{'Content-Type':'text/html'})
res.end(payload)

}
