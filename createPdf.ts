// import { PDFDocument, rgb } from

import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

// Create a new PDF document
const pdfDoc = await PDFDocument.create()

// Add a page to the document
const page = pdfDoc.addPage([600, 400]) // Specify the page size (width x height)

console.log('This is PDFDocument.StandardFonts', PDFDocument)

// Create a font
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// Add text to the page
const text = 'Hello, PDF World!'
page.drawText(text, {
	x: 50,
	y: 350,
	size: 30,
	font: font,
	color: rgb(0, 0, 0), // Black color
})

// Serialize the PDF to bytes
const pdfBytes = await pdfDoc.save()

// Now, you can save the bytes to a file or send them as a response
// For example, if you want to save it to a file:
const fs = require('fs')
fs.writeFileSync('example.pdf', pdfBytes)

console.log('PDF created successfully!')
