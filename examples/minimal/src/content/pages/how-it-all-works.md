---
title: 'Assets'
---

# How it works

The `./public` folder contains all of the themes assets including textures, fonts, CSS, etc.

The `./tailwind.config.cjs` file uses the `./public` folder to extend tailwinds classes into minecraft themed classes

The `./src` folder contains the structure of your website. It comes with some examples on how to use the Minecraft theme to create your own pages, layouts, and components. All examples use HTML with classes, zero JS and CSS

## Styles

In order to access classes and textures your page must include the following link tags on your page:

```html
<link rel="stylesheet" href="/css/minecraft.css">
```

### CSS variables


##### `--mc-block-size`:

**Default:** `48px`

<div class="h-1-block w-1-block bg-mc-block-cobblestone"></div>

The size of a block on your website, controls the sizing of all minecraft styling (UI, Blocks, Items, etc), every class is sized relative to this property to keep everything the same size. Its value should be a multiple of the 16px, the size of a block texture, to avoid image scaling issues 

You can set the block size of an element using a class like: `[--mc-block-size:{number}]`


##### `--mc-gui-zoom`:

<div class="flex flex-wrap items-center gap-5 m-2">
  <div class="h-1-block w-1-block p-1 [--mc-gui-zoom:1.5] map"></div>
  <div class="h-1-block w-1-block p-1 [--mc-gui-zoom:2.5] map"></div>
  <div class="h-1-block w-1-block p-1 [--mc-gui-zoom:5] map"></div>
</div>

This property allows you to zoom the UI classes in and out by increasing or decreasing the widths of border-images.

Use the class `[--mc-gui-zoom:{number}]` to easily 'zoom' UI textures in and out


##### `--{number}-block`:

**Varients:** `1/16 / 1/8 / 1/4 / 1/2 / 1-32`

<div class="flex flex-wrap items-center gap-3">
  <div class="h-[var(--2-block)] w-[var(--2-block)] bg-mc-block-cobblestone"></div>
  <div class="h-[var(--2-block)] w-[var(--1-block)] bg-mc-block-cobblestone"></div>
  <div class="h-[var(--1-block)] w-[var(--2-block)] bg-mc-block-cobblestone"></div>
</div>

CSS variables for sizing properties relative to `--mc-block-size`

**EX**: `var(--1/2-block)`, `var(--1-block)`, `var(--32-block)`

##### `--fluid-(0-9)`:

Responsive font sizes used for markdown

### Tailwindcss Classes

One of the main jobs of the tailwind config is to read all file names inside the `./public/imgs` folder and assign each file a `bg-` class. This makes it easy to use the textures inside `./public/imgs` by calling a class like `bg-mc-block-stone` or `bg-mc-item-diamond`


**Note**: Use the `./public` folder to lookup filenames in order to use these classes

##### `bg-{filename}`:

All blocks in the `./public/imgs/block` folder will create a block background class that look like: `bg-mc-block-{filename}` Ex: `bg-mc-block-dirt` `bg-mc-block-gold-block`

##### `bg-mc-item-{filename}`:

All items in the `./public/imgs/items` folder will create a item background class that look like: `bg-mc-item-{filename}` Ex: `bg-mc-item-cake` `bg-mc-item-diamond`

##### `bg-mc-painting-{filename}`:

All paintings in the `./public/imgs/paintings` folder will create a painting background class that look like: `bg-mc-painting-{filename}`Ex: `bg-mc-painting-skull` `bg-mc-painting-kebab`

##### `{number}-block`:

`1/16 / 1/8 / 1/4 / 1/2 / (1-99)-block`

<div class="flex flex-wrap items-center gap-3">
  <div class="h-2-block w-2-block bg-mc-block-cobblestone"></div>
  <div class="h-2-block w-1-block bg-mc-block-cobblestone"></div>
  <div class="h-1-block w-2-block bg-mc-block-cobblestone"></div>
</div>

This theme extends tailwinds `spacing` property to add block based spacing/sizes Ex: `w-1-block` `p-1/2-block` `h-9-block`

### Classes

Many of the minecraft styles and textures are hard to write as tailwindcss classes, these classes make it easy and simple to add minecraft styles to your elements without tailwindcss

##### `link`:

Styles <a>links</a> with the link color from minecrafts old website and adds underline on hover

##### `text-shadow`:

**Varients:** `none / xs / sm / md / lg / xl`

Applys the classic black text shadow from minecraft to text, use larger text shadows `text-shadow-xl` on larger text sizes for a better minecraft look

##### `markdown`:

Classless styling on all child elements, used to style html that is parsed from `.md` files, use on a parent that wraps your markdown html

##### `scrollbar`:

**Zoom:** `24` (scrollbar-thumb)

Minecraft styled scrollbar

##### `button`:

**Zoom:** `10`

<div class="flex flex-wrap items-center gap-3">
  <button class="button py-2 px-4 text-lg whitespace-nowrap">XS</button>
  <button class="button py-2 px-4 text-lg whitespace-nowrap">Small</button>
  <button class="button py-2 px-4 text-lg whitespace-nowrap">Larger Button</button>
</div>

Minecraft styled menu/option button

##### `raised-slot-button`:

**Zoom:** `24`

<div class="flex flex-wrap items-center gap-3">
  <div class="raised-slot-button h-1-block w-1-block"></div>
  <div class="raised-slot-button h-1-block w-4-block"></div>
</div>

The raised slot UI element can be used an an interactable button

##### `enchainting-slot-button`:

**Zoom:** `24`

<div class="flex flex-wrap items-center gap-3">
  <div class="slot-alt-button h-1-block w-1-block"></div>
  <div class="slot-alt-button h-1-block w-4-block"></div>
</div>

The enchant slot UI element can be used an an interactable button

##### `transparent-panel`:

**Zoom:** `10`

<div class="h-2-block w-2-block transparent-panel"></div>

UI panel with a transparent background

##### `panel`:

**Zoom:** `10`

<div class="h-2-block w-2-block panel"></div>

UI panels that look like the background of an inventory or chest

##### `panel-dark`:

**Zoom:** `10`

<div class="h-2-block w-2-block panel-dark"></div>

UI panel but dark

##### `transparent-achievement-panel`:

**Zoom:** `10`

<div class="h-1-block w-4-block transparent-achievement-panel"></div>

UI achievement panel with a transparent background

##### `achievement-panel`:

**Zoom:** `10`

<div class="h-1-block w-4-block achievement-panel"></div>

UI panel that looks like an achievement notification

##### `transparent-slot`:

**Zoom:** `24`

<div class="h-1-block w-1-block transparent-slot"></div>

Inventory/Chest item slot border

##### `slot`:

**Zoom:** `24`

<div class="h-1-block w-1-block slot"></div>

Inventory/Chest item slot border with background

##### `raised-slot`:

**Zoom:** `24`

<div class="h-1-block w-1-block transparent-raised-slot"></div>

The raised slot UI element with a transparent background

##### `raised-slot`:

**Zoom:** `24`

<div class="h-1-block w-1-block raised-slot"></div>

The opposite of the slot UI element, looks like a raised area instead of a recessed one

##### `raised-slot-hover`:

**Zoom:** `24`

<div class="h-1-block w-1-block raised-slot-hover"></div>

The raised slot button when on hover

##### `raised-slot-active`:

**Zoom:** `24`

<div class="h-1-block w-1-block raised-slot-active"></div>

The raised slot button when active or focused

##### `slot-alt`:

**Zoom:** `24`

<div class="h-1-block w-1-block slot-alt"></div>

The slot UI element used in game when choosing an enchant

##### `slot-alt-hover`:

**Zoom:** `24`

<div class="h-1-block w-1-block slot-alt-hover"></div>

The enchant slot button when on hover

##### `slot-alt-active`:

**Zoom:** `24`

<div class="h-1-block w-1-block slot-alt-active"></div>

The enchant slot button when active or focused

##### `textbox-alt`:

**Zoom:** `16`

<div class="h-1/2-block w-5-block textbox-alt"></div>

The textbox used in anvils

##### `textbox-alt-active`:

**Zoom:** `16`

<div class="h-1/2-block w-5-block textbox-alt-active"></div>

Active version of anvil textbox

##### `table`:

<table class="w-fit m-2"><thead><tr><th>ID</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>265</td><td>Iron Ingot</td><td>A ingot of iron, used for crafting</td></tr><tr><td>266</td><td>Gold Ingot</td><td>A ingot of gold, used for crafting</td></tr><tr><td>264</td><td>Diamond</td><td>A diamond, used for crafting</td></tr></tbody></table>

Styles table elements to look like in game inventories like chests

##### `map`:

**Zoom:** `4`

<div class="flex flex-wrap items-center gap-5 m-2">
  <div class="h-3-block w-3-block p-1 [--mc-gui-zoom:2] map"></div>
  <div class="h-2-block w-2-block p-1 map"></div>
  <div class="h-1-block w-1-block p-1 map"></div>
</div>

Styles the borders and background of an element to look like a minecraft map

##### `book`:

**Zoom:** `4`

<div class="h-9-block w-7-block pl-2 book [--mc-gui-zoom:4]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores, commodi explicabo aspernatur laboriosam dolorem corporis doloremque numquam nesciunt cum aliquid ipsum maxime iste autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores, commodi explicabo aspernatur laboriosam dolorem corporis doloremque numquam nesciunt cum aliquid ipsum maxime iste autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

Styles the borders and background of an element to look like a minecraft book

##### `sign`:

<div class="flex flex-wrap items-center gap-5 m-2">
  <div class="h-3-block w-6-block px-1 sign text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing</div>
  <div class="h-2-block w-4-block px-1 sign leading-[1.25rem] text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing</div>
</div>

Styles the text and background of an element to look like a minecraft sign, mimics the way signs work by centering text and wrapping on new lines

## Theme Structure

This is a theme structure/asset overview explaining where all assetes are located and how they interact with the theme

### Tailwind Config

The tailwind configuration located at projects root `./tailwind.config.cjs` reads texture files from the `./public/imgs` folder and creates new `bg-` classes for every texture in the `blocks`, `items`, `paintings`, and `icons` folders. This allows you to easily add, remove, or modify textures and use them on your website with only a class. The config also generates block based spacings like `1-block` and up to `99-block` that can be used with other tailwind classes for sizing based on block size EX: `p-1/16-block` `w-3-block` `h-5-block`

### Minecraft.css

`minecraft.css` located in `./public/css` uses assets from `./public/fonts` and `./public/imgs` to create easy to use minecraft styled classes and is the central location for all minecraft styles that are not generated using tailwindcss

### Textures

#### Blocks

Blocks textures are stored in the `./public/imgs/blocks` folder. All textures from this folder are parsed into classes like `bg-mc-block-{filename}`, to add blocks to the theme just add a texture to the block folder

#### Items

Items textures are stored in the `./public/imgs/items` folder. All textures from this folder are parsed into classes like `bg-mc-item-{filename}`, to add items to the theme just add a texture to the item folder

#### Paintings

Painting textures are stored in the `./public/imgs/paintings` folder. All textures from this folder are parsed into classes like `bg-mc-painting-{filename}`, to add paintings to the theme just add a texture to the painting folder

#### UI

UI textures are stored in the `./public/imgs/ui` folder, these textures include buttons, scrollbar, panels, and more. Each of these textures have been assigned a class inside the `./public/css/minecraft.css` file, a full list of all ui classes can be found here 

#### Icons

Icon textures are stored in the `./public/imgs/icons` folder. All textures from this folder are parsed into classes like `bg-mc-icon-{filename}`, this makes adding icons to the theme as easy as adding a texture to the icons folder

### Fonts

The theme comes preloaded with 5 different community made fonts located in `./public/fonts` and are imported into the project using `./public/css/minecraft.css`, if you want to add your own fonts add your font files to `./public/fonts` and define a `@fontface` rule inside the `minecraft.css` file

### Project Logo

The logo located at `./public/imgs/project-logo.png` was generated using [textstudio](https://www.textstudio.co/logo/minecraft-3d-text-41)

This project used the following settings:

  - Zoom: `36%`
  - Line Spacing: `10%`
  - Use default for character spacing and rotation
  - Use the `Minecrafter Regular` font
  - Navigate to the background tab and uncheck `Background or Transparent` to make background transparent
  - Navigate to the download tab and select `Medium` quality with `fitted` aspect ratio
  - Crop image after downloading


### Favicon

The default favicon is a grass block, this can be replaced by converting a texture to a `.ico` file, renaming it to `favicon.ico`, then replacing the old favicon inside the `./public` folder