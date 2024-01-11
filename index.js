const GoogleSpreadsheet = require ('google-spreadsheet')
//const {promisyfi} = require ('util')
const crendetials = require ('./credetions.json')

const docId = '1EYJtgQblJSGLcVRAE7CJRD4b0dxq4BbdAPlYVSdSCBI'

const doc = new GoogleSpreadsheet(docId)

doc.useServiceAccountAuth(crendetials, err => {
    console.log('err', err);
})

/*const accessSheet = async() =>{
    const doc = GoogleSpreadsheet(docId)
    await promisyfi (doc.getInfo)()
    console.log(info);
}

accessSheet()*/