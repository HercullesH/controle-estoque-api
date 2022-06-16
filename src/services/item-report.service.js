const itemReport = require('../repositories/item-report.repository');
const Excel = require('exceljs');

const criarXlsx = async function (filtros) {
	const itens = await itemReport.relatorio(filtros);

	const workbook = new Excel.Workbook();
	const fileName = new Date().getTime().toString()+'_report.xlsx';
	const worksheet = workbook.addWorksheet('relatorio');
	{
		
	}
	worksheet.columns = [
		{ header: 'Nome', key: 'nome', width: 25 },
		{ header: 'Quantidade', key: 'quantidade', width: 25 },
		{ header: 'Preço', key: 'preco', width: 25 },
		{ header: 'Data de Criação', key: 'createdAt', width: 25 },
		{ header: 'Tipo', key: 'tipo', width: 25 },
	]

	worksheet.getCell('A1').style = { font: { bold: true } }
	worksheet.getCell('B1').style = { font: { bold: true } }
	worksheet.getCell('C1').style = { font: { bold: true } }
	worksheet.getCell('D1').style = { font: { bold: true } }
	worksheet.getCell('E1').style = { font: { bold: true } }
	worksheet.addRows(itens);
	await workbook.xlsx.writeFile(fileName);

	return itens;
}

module.exports = {
	criarXlsx: criarXlsx
}