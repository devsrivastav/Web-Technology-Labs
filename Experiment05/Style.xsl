<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Book Library</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        color: #007BFF;
                    }
                    .book {
                        border: 1px solid #ccc;
                        margin: 10px 0;
                        padding: 10px;
                    }
                </style>
            </head>
            <body>
                <h1>Library Collection</h1>
                <xsl:for-each select="library/book">
                    <div class="book">
                        <h2><xsl:value-of select="title"/></h2>
                        <p><strong>Author:</strong> <xsl:value-of select="author"/></p>
                        <p><strong>Year:</strong> <xsl:value-of select="year"/></p>
                        <p><strong>Genre:</strong> <xsl:value-of select="genre"/></p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
