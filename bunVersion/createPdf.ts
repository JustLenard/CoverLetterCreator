import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

// Create a new PDFDocument
const pdfDoc = await PDFDocument.create()

// Embed the Times Roman font
const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

// Add a blank page to the document
const page = pdfDoc.addPage()

// Get the width and height of the page
const { width, height } = page.getSize()
console.log('This is height', height)

console.log('This is width', width)

const coverLetterText = await Bun.file('./coverLetters/coverLetter-1.txt').text()

const res = coverLetterText.replaceAll('\n', ' \n')

res.split('').map((el) => {
	if (el === '\n') {
		console.log(true)
	}
})

// Draw a string of text toward the top of the page
const fontSize = 10
page.drawText(res, {
	x: 50,
	y: height - 4 * fontSize,
	size: fontSize,
	lineHeight: 12,
	// font: timesRomanFont,
	// color: rgb(0, 0.53, 0.71),

	maxWidth: 500,
	wordBreaks: [' '],
})

// Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save()

Bun.write('this.pdf', pdfBytes)

// For example, `pdfBytes` can be:
//   • Written to a file in Node
//   • Downloaded from the browser
//   • Rendered in an <iframe>
