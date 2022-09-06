import React from 'react'
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

const PacientePDF = (paciente) => {

    const date = new Date(paciente.timestamp).toLocaleDateString()

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    pdfMake.fonts = {
        Roboto: {
          normal: 'Roboto-Regular.ttf',
          bold: 'Roboto-Medium.ttf',
          italics: 'Roboto-Italic.ttf',
          bolditalics: 'Roboto-MediumItalic.ttf'
        }
      };

    const reportTitle = [
        {
            text: 'CONSULTORIO PEDIATRICO',
            fontSize: 20,
            bold: true,
            color: '#0F3460',
            alignment: 'center',
            margin: [0, 30, 0, 20]
        }
    ]

    const datails = [
        {
            text: 'Dr. Germán Paz Olavarría',
            fontSize: 15,
            bold: true,
            color: '#0F3460',
            alignment: 'right',
            margin: [0, 0, 0, 5]
        },
        {
            text: 'PEDIATRA / RECIEN NACIDOS',
            fontSize: 10,
            alignment: 'right',
            bold: true,
            color: '#0F3460',
            margin: [0, 0, 0, 10]
        },

        //Tabla de contenido
        {
            table: {
                widths: ['*', '*'],
                heights:['*', '*', '*','auto'],
                headerRows: 1,
                body: [
                    [
                        {
                            text: 'H I S T O R I A  C L Í N I C A',
                            fontSize: 15,
                            bold: true,
                            alignment: 'center',
                            color: '#0F3460',
                            colSpan: 2,
                            margin: [0, 10, 0, 10]
                        },{}
                    ],
                    [
                        {
                            text: (
                                'Nombre y Apellido:  ' + paciente.nombre + ' ' + paciente.apellido + '\n\n' +
                                'Dirección:  ' + paciente.direccion + '\n\n' +
                                'Teléfono:  ' + paciente.telefono 
                            ),
                            fontSize: 10,
                            bold: true,
                            color : '#0F3460',
                            margin: [0, 10, 0, 10]
                        },
                        {
                            text: (
                                'Edad:  ' + paciente.edad + '\n\n' +
                                'Sexo:  ' + paciente.sexo + '\n\n' +
                                'Fecha de Nacimiento:  ' + paciente.nacimiento
                            ),
                            fontSize: 10,
                            bold: true,
                            color : '#0F3460',
                            alignment: 'left',
                            margin: [0, 10, 0, 10]
                        }
                    ],
                    [
                        {
                            text: 'SÍNTOMAS',
                            fontSize: 12,
                            bold: true,
                            alignment: 'center',
                            color: '#0F3460',
                            colSpan: 2,
                            margin: [0, 5, 0, 5]
                        }
                    ],
                    [
                        {
                            text: date + ': ' + paciente.sintomas,
                            fontSize: 10,
                            bold: true,
                            color : '#0F3460',
                            colSpan: 2,
                            margin: [0, 5, 0, 5]
                        }
                    ]
                ]
            }
        }
    ]

    const pagination = []

    const docDefinition = {

        pageSize: 'A4',
        pageMargins: [ 25, 60, 25, 60 ],

        header: [reportTitle],
        content: [datails],
        footer: [pagination],

    }

        const pdfFile = pdfMake.createPdf(docDefinition, null, null, pdfFonts.pdfMake.vfs);
    
        //pdfMake.createPdf(docDefinition).open();
        pdfFile.download(`${paciente.apellido}-${paciente.nombre}-histClinica.pdf`);

    
}

export default PacientePDF