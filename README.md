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
`<div></div>`-Tags werden verwendet um Organisations- bzw. Layout-Abschnitte festzulegen. Das Layout innerhalb dieser Abschnitte kann über `css`-Rules geändert werden, sodass am Ende jeder `<div class="layout-class">` mit einer bestimmten Klassenbezeichnung (layout-class) immer dasselbe Layout ermöglicht. Einige praktische Layout-Klassen habe ich bereits vorbereitet, sollte etwas fehlen, fragt mich gerne und sagt mir was genau ihr braucht und ich bau euch das.

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
### Tabellen `<div class="article_table"><div>`

- wird verwendet um Tabellen jeglicher Art darzustellen
- die Tabellen sind immer zentriert, die Schrift oberhalb der Tabelle
##### Beispiel:
```
<div class="article_table">
    <p>Tabellenüberschrift</p>
    <table>
      <tr>
        <th>One</th>
        <th>Two</th>
        <th>Three</th>
        <th>Four</th>
      </tr>
      <tr>
        <td>Agarose</td>
        <td>agrobacterium tumefaciens</td>
        <td>Testeintrag</td>
        <td>Viel zu langer Testeintrag, der hoffentlich auf mehrere Zeilen gebunden wird</td>
      </tr>
      <tr>
        <td>Test</td>
        <td>saccharomyces cerevisiae</td>
        <td>Testeintrag</td>
        <td>Ebenfalls ein langer, aber nicht so langer Text.</td>
      </tr>
    </table>
  </div>
```
![](https://lh3.googleusercontent.com/s2zsmFPkRUgmXMwIVIqopMkUK8_pYTQnWnxInHD4Z9TlDdJ8sxzZKeI4vEImtMqnVTAGeZdy4cFciA "Tabelle")
