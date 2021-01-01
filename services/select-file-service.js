
const fs =require('fs');
const path =require('path')

const dir =process.cwd()
function getDirectoryContents(files, currentDir, query) {
    const data=[]
    files.foreach((file)=>{
        if(isDirectory(currentDir,file)){
            data.push({
                name:file,
                isDirectory:false,
                path:path.join(query,file),
                currentDir,currentDir
            })
        }
    })
    return data;
}

function isDirectory(currentDir, file) {

    const fileInfo= fs.statSync(path.join(currentDir,file))
    return fileInfo.isDirectory()
}

function readDir(currentDir, res, query) {
    
  fs.readdir(currentDir, (err, files) => {
    let directoryContents = [];
    if (!err) {
      directoryContents = getDirectoryContents(files, currentDir, query);
    }
    res.json(directoryContents)
  });
}

exports.get = (req, res) => {
    var currentDir=dir
    const query = req.query.path || ""
    if(query){
        currentDir= path.join(currentDir,file)
    }
};
