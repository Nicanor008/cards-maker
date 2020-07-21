import React from 'react'
import jsPDF from 'jspdf'

export const DownloadCard = ({ downloadCardDetails }) => {
    console.log(">>>>>>>>>>......>>>>>>>..", downloadCardDetails)
    var doc = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
      })
       
      doc.text('Hello world!', 1, 1)
    //   doc.save(`${downloadCardDetails.name}.pdf`)
    return console.log(">>>>>>>>>>>........>>>>>>>>>>....got it..............>>>......")
}
