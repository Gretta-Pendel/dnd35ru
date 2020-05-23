var docDefinition = {

};

var now = new Date();


pdfMake.createPdf(docDefinition).download("cleric-spell-list.pdf");
console.log(new Date() - now);