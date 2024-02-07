import { PDFDocument, StandardFonts } from 'pdf-lib'
import { formatDate } from './utils/utils'

const model = await Bun.file('./data/pdfTemplate.pdf').arrayBuffer()
const pdfDoc = await PDFDocument.load(model)

// Embed the Times Roman font
const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

const page = pdfDoc.getPage(0)

// Get the width and height of the page
const { width, height } = page.getSize()

const arg = Bun.argv.at(-1)
const coverLetterText = await Bun.file(`./coverLetters/coverLetter-${arg}.txt`).text()

const parsedCoverLetter = coverLetterText.replaceAll('\n', ' \n')

// Draw a string of text toward the top of the page
const fontSize = 10

page.drawText(formatDate(), {
	x: 500,
	y: 710,
	size: fontSize,
	lineHeight: 12,
	maxWidth: 500,
	wordBreaks: [' '],
})

page.drawText(parsedCoverLetter, {
	x: 50,
	y: 680,
	size: fontSize,
	lineHeight: 12,
	maxWidth: 500,
	wordBreaks: [' '],
})

// Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save()

Bun.write(`./pdfs/coverLetter-${arg}.pdf`, pdfBytes)
