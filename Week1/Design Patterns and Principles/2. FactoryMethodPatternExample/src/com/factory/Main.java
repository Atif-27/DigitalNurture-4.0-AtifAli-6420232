package com.factory;

import com.factory.documents.Document;
import com.factory.factories.*;

public class Main {
    public static void main(String[] args) {
        // Generate a Word document instance
        DocumentFactory wordDocFactory = new WordDocumentFactory();
        Document wordDoc = wordDocFactory.createDocument();
        display(wordDoc);

        // Generate a PDF document instance
        DocumentFactory pdfDocFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfDocFactory.createDocument();
        display(pdfDoc);

        // Generate an Excel document instance
        DocumentFactory excelDocFactory = new ExcelDocumentFactory();
        Document excelDoc = excelDocFactory.createDocument();
        display(excelDoc);
    }

    private static void display(Document document) {
        System.out.println("Generated: " + document.getType() + " | Content Preview: " + document.getContent());
    }
}
