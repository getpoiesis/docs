---
title: Print a book
description: The interior PDF and the full-wrap cover for KDP, IngramSpark and other print-on-demand services.
---

# Print a book

A print-on-demand service asks for two files. The **Print book** tab makes
both:

- the **interior**: the pages of the book, as a print-ready PDF;
- the **cover**: the front, the spine and the back on one page.

φ Poiesis works out the margins and the blank pages before chapters. It also works
out the width of the spine from the page count.

<img src="/img/app/print-book-light.png" alt="The Print book tab: design, trim size, paper and ink, the check, and the two export buttons" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/print-book-dark.png" alt="The Print book tab: design, trim size, paper and ink, the check, and the two export buttons" width="1600" height="1000" loading="lazy" decoding="async" />

## Make the files

1. Open the project's **Export** page (see
   [How exporting works](./exporting)) and choose **Print book**.
2. Choose the four things a print service asks for:
   - **Design**: how the book looks (see [Designs](./designs)).
   - **Trim size**: the size of the printed page.
   - **Paper**: **White** or **Cream**.
   - **Ink**: **Black**, or **Keep φ's colour**.
3. Read the check below the choices, and fix anything it lists.
4. Press **Export print PDF** to make the interior.
5. Press **Export cover** to make the cover.
6. Upload the two files to your print service. They are uploaded separately.

## Choosing the trim size

| Trim size | Usual for |
| --- | --- |
| **Pocket — 5 × 8 in** | Mass-market paperbacks |
| **5.25 × 8 in** | Shorter novels |
| **Digest — 5.5 × 8.5 in** | Novels, memoir, poetry |
| **Trade — 6 × 9 in** | Most fiction and non-fiction; the safe choice |
| **Royal — 6.14 × 9.21 in** | Larger non-fiction |
| **7 × 10 in** | Workbooks and illustrated books |
| **Letter — 8.5 × 11 in** | Manuals and large-format books |

These are the sizes that KDP and IngramSpark print. A project may be set to a
paper size they do not print, such as A4. The tab then tells you, and asks
you to choose one of these sizes.

## Paper and ink

**Cream** paper is usual for fiction. **White** paper is usual for
non-fiction. Cream paper is slightly thicker, so the same book has a wider
spine on cream paper.

By default, links and citations print in black. This way, no colour from
your screen appears on a printed page. Pictures always keep their colour.
Choose **Keep φ's colour** only if you are paying for colour printing.

## What Poiesis takes care of

- **Chapters open on a right-hand page.** When the design asks for this, Poiesis
  adds a blank page before the chapter where one is needed. You can turn this
  off under **Adjust the design**.
- **Margins for the binding.** A book with more pages gets a wider inside
  margin, so the text stays clear of the spine. Print services require this.
- **Page count limits.** A paperback needs at least 24 pages and can have at
  most 828. The check tells you if your book has fewer or more.
- **No cover inside the interior.** The cover is a separate file.
- **Footnotes** are at the foot of their page.
- **Running heads and page numbers** follow the design. The first page of a
  chapter has none.

## The cover

**Export cover** makes one PDF with the back, the spine and the front. It
adds bleed: an extra eighth of an inch around the edge, which the print
service cuts away.

- **The front** is your cover art. You set it at the top of the project's
  page.
- **The back and the spine** take their colour from the cover art.
- **The back** shows the book's description and the first author's short
  bio. The corner where the barcode goes is left empty.
- **The spine** is sized from the page count and the paper. From 80 pages
  on, it shows the title and author. Below 80 pages the spine is too narrow
  for text and stays plain.

The check warns you when the cover art is too small to print sharply. A
printed cover needs about 300 pixels per inch.

:::tip Order a proof copy

Before you publish, order one printed proof from your print service. It is
the only way to see the colours, the margins and the spine as a reader will
see them.

:::

## See also

- [Preview](./preview): every page of the book, as spreads.
- [Designs & adjusting them](./designs)
- [Book details](./book-details): the title page, copyright page and ISBN.
- [Make an ebook](./make-an-ebook): the same book for reading apps.
