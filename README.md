# iGEM-Template
Template genutzt vom iGEM-Team Göttingen 2018, um das Team-Wiki zu füllen.

## Übersicht über die wichtigsten HTML-Tags:

### Überschriften `<h1></h1>, <h2></h2>, <h3></h3>, <h4></h4>`
- erzeugt Überschriften in verschiedenen Größen von `<h1>` sehr groß bis `<h4>` sehr klein

##### Beispiel:
```
<h1>Überschrift</h1>
<h2>Überschrift</h2>
<h3>Überschrift</h3>
<h4>Überschrift</h4>
```
><h1>Überschrift</h1>
><h2>Überschrift</h2>
><h3>Überschrift</h3>
><h4>Überschrift</h4>

***

### Paragraph-Tag `<p></p>` 
- Zwischen diesen Tags wird der Haupt-Text geschrieben
- Im Browser wird Text zwischen `<p></p>` als abgeschlossener Paragraph dargestellt (Blocksatz mit Abstand vor und nach dem Text-Abschnitt)
- 
##### Beispiel:
```
<p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
```

><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

***
### Nummerierte und nicht-nummerierte Liste `<ol></ol>` und `<ul></ul>`
- werden verwendet um Listen zu erstellen, die entweder fortlaufend nummeriert sind oder einen vorangstellten Aufzählungspunkt haben
- `<ol>` für *ordered list* (nummeriert), `<ul>` für *unordered list* (nicht nummeriert)

##### Beispiel

```
<ol>
    <li>Eins</li>
    <li>Zwei</li>
    <li>Drei</li>
</ol>

<ul>
    <li>Eins</li>
    <li>Zwei</li>
    <li>Drei</li>
</ul>
```
![enter image description here](https://lh3.googleusercontent.com/HumqmteHRsrfF7Ucwtg7mfTRM0XlJi8_sKjogs7aQTAvn0B7q-OPBA4vn96eDqgDh3-i1qltgDSI2w "Nummerierte und nicht-nummerierte Liste")
### Zeilenumbruch `<br/>`

- erzwingt einen Zeilenumbruch (vergleichbar mit `Shift + Enter` in Word)

##### Beispiel:
```
<p>Dieser Text soll an einer Stelle gebrochen werden<br/>und in der nächsten Zeile weiterlaufen.</p>
```
><p>Dieser Text soll an einer Stelle gebrochen werden<br/>und in der nächsten Zeile weiterlaufen.</p>

***

### Text fett `<strong></strong>`

- erzeugt fetten Text
- wird auf einzelne Wörter angewendet

##### Beispiel:
```
<p>Dieser Text soll <strong>fett</strong> geschrieben werden.</p>
```
><p>Dieser Text soll <strong>fett</strong> geschrieben werden.

***

### Text kursiv `<em></em>`

-erzeugt kursiven Text
-wird auf einzelne Wörter angewendet

##### Beispiel:
```
<p>Dieser Text soll <em>kursiv</em> geschrieben werden.</p>
```
><p>Dieser Text soll <em>kursiv</em> geschrieben werden.</p>

***

### Text markiert `<mark></mark>`

- erzeugt markierten Text
- wird auf einzelne Wörter angewendet
##### Beispiel:
```
<p>Dieser Text soll <mark>markiert</mark> werden.</p>
```
><p>Dieser Text soll <mark>markiert</mark> werden.</p>

### Organisationsebenen `<div></div>`

- Dieser Tag wird nicht zum direkten Stylen benutzt und gibt mir eine Möglichkeit euch vorgefertigte Layouts zu bieten. Wie im nächsten Abschnitt und in der Beispieldatei zu sehen, muss zum Darstellen eines Bilds mit Bildunterschrift folgender `<div>` verwendet werden:
```
<div class="article_picture article_picture-left">
    <img src=URL ZUR BILDQUELLE">
    <p>picture-left</p>
</div>
 ```
- Der `<img>`-Tag ermöglicht das Einfügen von Bildern. Damit diese die richtige Größe haben und die Bildunterschrift darunter linksbündig und mit vernünftigen Abständen dargestellt werden, müssen bestimmte Befehle in Form von `css`-Rules verwendet werden. Diese sind bereits geschrieben und können Global verändert werden. Es reicht daher den `<div class="article_picture">`-Tag zu verwenden bzw. andere `<div>`-Tags für andere Layouts
- alle Layout-`<div>`-Tags werden im nächsten Abschnitt erklärt

## Übersicht über die Layout-`<div>`s
`<div></div>`-Tags werden verwendet um Organisations- bzw. Layout-Abschnitte festzulegen. Das Layout innerhalb dieser Abschnitte kann über `css`-Befehle geändert werden, sodass am Ende jeder `<div></div>` mit einer bestimmten Klasse (z.B. `<div class="article_picture>INHALT</div>` immer dasselbe Layout ermöglicht. Einige praktische Layout-Klassen habe ich bereits vorbereitet, sollte etwas fehlen, fragt mich gerne und sagt mir was genau ihr braucht und ich gestalte diese.

### Überschriften mit gelber Box
- diese Überschrift stellt eine nette Möglickeit dar eine stark hervorgehobene Überschrift in Roberts Stil zu verwenden

##### Beispiel:
```
<div class="article_head-line">
    <h2>head-line</h2>
</div>
```

![](https://lh3.googleusercontent.com/-OXEMQWN-X6vPI_4kam7_mYUT2T3sit6R-oQne3SxWfsBaqWcYn_1aczcYAIzC9m-t7MsyU6Bn79RA "Überschrift mit gelber Box")

***

### Bild mittig `<div class="article_picture></div>`
- wird verwendet um Bilder zu zentrieren und ihnen eine linksbündige Bildunterschrift zu geben, die Bilder nehmen dabei standardmäßig 75% des verfügbaren Platzes ein

##### Beispiel:
```
<div class="article_picture">
    <img src=URL ZUR BILDQUELLE">
    <p>picture</p>
</div>
```
 
![](https://lh3.googleusercontent.com/Ix9uJziW3lmcANQD9pAQM5UrGpP4GyoryEX0I7Op6ay95UO8py-nk5__M0jX625s1QNA52U2sY3uGA "Bild mittig")

***

### Bild links `<div class="article_picture article_picture-left"></div>`
- wird verwendet um Bilder links im Fließtext anzuordnen
- die Bilder nehmen dabei standardmäßig 30% des verfügbaren Platzes ein

##### Beispiel:
```
<div class="article_picture article_picture-left">
    <img src=URL ZUR BILDQUELLE">
    <p>picture-left</p>
</div>
```
 
![enter image description here](https://lh3.googleusercontent.com/QHfWRS3FlF16P2SJQtgDRpmbMZEcxHuTxUy2BiH5d-IbprjKgKZQOJTDPjAPyuJPRP8BtaExPydy2A "Bild links")

***

### Bild rechts `<div class="article_picture article_picture-right"></div>`
- wird verwendet um Bilder rechts im Fließtext anzuordnen
- die Bilder nehmen dabei standardmäßig 30% des verfügbaren Platzes ein

##### Beispiel:
```
<div class="article_picture article_picture-right">
    <img src=URL ZUR BILDQUELLE">
    <p>picture-right</p>
 </div>
 ```
![](https://lh3.googleusercontent.com/q604dhuBXo1i1EHwOahV75CUf193EVuPwvlPj5g_G6IVV-hBh7GeyNrORb5a9Vnkhno2mPbZWdjzCg "Bild rechts")

***
### Mehrere Bilder `<div class="article_multpicture">`

- wird verwendet um zwei oder drei Bilder nebeneinander darzustellen
- die Bildunterschriften sind optional und können weggelassen werden ohne das Layout zu verändern

##### Beispiel
```
<div class="article_multpicture">
    <div>
        <div>
            <img src="../../images/Notebook/notebook_sp1_070518.png">
            <p>Unterschrift</p>
        </div>
        <div>
            <img src="../../images/Notebook/notebook_168_070518.png">
            <p>Unterschrift</p>
        </div>
    </div>
    <p>Growth curves of the wild type SP1 and the 168 mutant, auxotrophic for tryptophan</p>
</div>
```
![](https://lh3.googleusercontent.com/X96dTf9IyzWwGGGD5Obbi7_ia6OTp4tSUnucRkgaTYSBfpJhk1XoY6F4WCyOrI2fbGPhZB64ZjvyNQ "Mehrere Bilder")

#### Zusatz
- durch Hinzufügen des Klassen-Tags `class="article_multpicture-triple` können auch drei Bilder nebeneinander angeordnet werden

##### Beispiel
```
<div class="article_multpicture article_multpicture-triple">
    <div>
        <div>
            <img src="../../images/Notebook/notebook_sp1_070518.png">
            <p>Unterschrift</p>
        </div>
        <div>
            <img src="../../images/Notebook/notebook_168_070518.png">
            <p>Unterschrift</p>
        </div>
         <div>
            <img src="../../images/Notebook/notebook_168_070518.png">
            <p>Unterschrift</p>
        </div>
    </div>
    <p>Growth curves of the wild type SP1 and the 168 mutant, auxotrophic for tryptophan</p>
</div>
```

***
### Tabellen `<div class="article_table"><div>`

- wird verwendet um Tabellen jeglicher Art darzustellen
- die Tabellen sind immer zentriert, die Schrift oberhalb der Tabelle
##### Zusatzfunktionen:
- an die `<th>` und `<td>`-Tags kann die Klasse `class="article-table_right"` angefügt werden, um den Text rechtsbündig anzuzeigen (wichtig bei Zahlen)
- and die `<tr>`-Tags kann die Klasse `class="article_table_hline"` angefügt werden, um **oberhalb** der Tabellen-Reihe eine durchgezogene Linie zu erzeugen
##### Beispiel:
```
<div class="notebook-table article_table">
    <table>
        <tr>
            <th>Sample</th>
            <th class="article-table_right">Reference sample</th>
        </tr>
        <tr>
            <td>800&nbsp;&micro;L H<sub>2</sub>O</td>
            <td>800&nbsp;&micro;L H<sub>2</sub>O</td>
        </tr>
        <tr>
            <td>0.5, 1.0 &amp; 2.0&nbsp;&micro;L crude extract</td>
            <td>no protein but equal volume of buffer</td>
        </tr>
        <tr>
            <td>200&nbsp;&micro;L Bradford Solution</td>
            <td>200&nbsp;&micro;L Bradford Solution</td>
        </tr>
        <tr>
            <td>Sodium Succinate (30%)</td>
            <td class="article-table_right">1</td>
        </tr>
        <tr>
            <td>50% glucose</td>
            <td class="article-table_right">0.5</td>
        </tr>
        <tr>
            <td>(Tryptophan</td>
            <td class="article-table_right">0.5)</td>
        </tr>
        <tr class="article_table_hline">
            <td><strong>Ad to 50&nbsp;mL with sterile water</strong></td>
            <td class="article-table_right">100</td>
        </tr>
    </table>
</div>
```
![](https://lh3.googleusercontent.com/mw4Wo6dd9GUKRNGhNUsOuPoZPkglALozoRC2PVt00ZAa8yELtqMfTU2s50-bjkyTH6f0cfBtFuhjzQ "Tabelle")

***

### Formeln einfügen `<div class="article_formula">`
- ermöglicht das Einfügen von Formeln, die vorher als PNG erstellt wurden (z.B. mit http://latex2png.com/)
- die Formeln besitzen eine feste Höhe und sind Latex-ähnlich zentriert

##### Beispiel
```
<div class="article_formula">
    <img class="article_formula" src="PATH_TO_FORMULA">
</div>
```
![](https://lh3.googleusercontent.com/zL0kMMH4v9p6uIHxYCRSjXyhNA8TOWy24C0dKKBTMH9IKukLDeAqSQ4AjvCtFtL0O5vzTM-99CiSsQ "Formel")



