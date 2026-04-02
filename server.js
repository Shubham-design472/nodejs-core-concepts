import http from 'node:http'
import path from 'node:path'
import {serveStatic} from './utils/serveStatic.js'
import fs from 'node:fs/promises'
import {getData} from './utils/getData.js'
import { handleGet } from './handlers/routeHandlers.js'
import { handlePost } from './handlers/routeHandlers.js'
import { handleNews } from './handlers/routeHandlers.js'



const port=8000


const __dirname = import.meta.dirname
console.log(await getData())

//console.log('CWD',process.cwd())



const server= http.createServer(async (req,res)=>{

//const pathToResource=path.join(__dirname,`public`,`index.html`)
//console.log(pathToResource)

if(req.url==='/api')
{
    if(req.method==='GET')
    {
    return await handleGet(res) 
    }

   else if(req.method==='POST')
    {
    return await handlePost(req,res) 
    }

}

else if(req.url==='/api/news')
{
return await handleNews(req,res)

}

else if(!req.url.startsWith('/api')){
await serveStatic(req,res,__dirname)}

//const content = await fs.readFile(pathToResource)



})


server.listen(port,()=>console.log(`Server is connected to port ${port}`))
