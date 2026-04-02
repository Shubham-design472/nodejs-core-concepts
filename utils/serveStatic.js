/*
Challenge 2:

1. Create and export a function called 'serveStatic'. 
   It should take in the base directory as a parameter.

2. Build a path to index.html in the 'public' folder and save it to a const 'filePath'. 
   (Which node module will you need to import to do this? Which method joins the path together?)

3. Log 'filePath' to the console.
*/


import path from 'node:path'
import fs from 'node:fs/promises'
import {sendResponse} from './sendResponse.js'
import {getContentType} from './getContentType.js'

export async function serveStatic(req,res,dir)
{
const publicDir=path.join(dir,'public')
const filepath=path.join(publicDir,req.url==='/'?'index.html':req.url)
const ext=path.extname(filepath)
const contentType=getContentType(ext)
try{
const content = await fs.readFile(filepath)

sendResponse(res,200,contentType,content)

}catch(err)
{
console.log(err)
if(err.code==='ENOENT')
{
const content = await fs.readFile(path.join(publicDir,'404.html'))
sendResponse(res,404,'text/html',content)
}

else
{
sendResponse(res,500,'text/html','<html><h1>Error: ${err.code}</h1></html>')
}


}

}
