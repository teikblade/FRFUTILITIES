/*
Developer By: Francisco Garcia
Date: 10-02-2021
Description: 
Kit for convert image png to a svg
Change directoryImage and directorySvg
next write in console: npm run convert-to-svg
*/

const potrace = require('potrace')
const  fs = require('fs')
const path = require('path')

//DIRECTORY
console.log('directory: '+path.join(__dirname,'/public/img'));
let directoryImage = path.join(__dirname,'/public/img')
let directorySvg = path.join(__dirname,'/public/svg')
 fs.readdir(directoryImage, (err, data) =>{
    data.forEach(image => {
        let imageExtension = image.split('.');
        if(imageExtension[1] == 'png'){
            if(!fs.existsSync(directorySvg)){
                fs.mkdir(directorySvg,(err) => {
                    console.log(err);
                })
            }
            //DEBUN FILE DIRECTORY
            //console.log(path.join(directoryImage+'/'+image))
             potrace.trace(path.join(directoryImage+'/'+image), (err, svg)  =>{
                if (err) throw err;
                fs.writeFileSync(path.join(directorySvg+'/'+imageExtension[0]+'.svg'), svg);
                console.log('Svg - ' +imageExtension[0]+'.svg - Generated')
                
            })  
        } 
    });
}) 
