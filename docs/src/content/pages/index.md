---
title: Theme Reference
---

# Theme Reference

## Components

### `mc-book`

<div class="flex flex-wrap items-center gap-1/2-block p-4">
  <div class="shrink h-5-block w-4-block p-1 mc-book text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit?</div>
  <div class="shrink h-3-block w-5-block p-1 mc-gui-zoom-6 mc-book text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores?</div>
</div>

```html
<div class="h-5-block w-4-block p-1 mc-book text-sm">...</div>
<div class="h-3-block w-5-block p-1 mc-gui-zoom-6 mc-book text-sm">...</div>
```

### `mc-sign`

<div class="flex flex-wrap items-center gap-1/2-block p-4">
  <span class="shrink h-3-block w-5-block p-1 mc-sign text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</span>
  <div class="shrink h-24 w-40 p-0.5 mc-sign">
    <span>Lorem ipsum dolor amet, <span class="text-mc-blue">ipsum dolor sit amet</span>?</span>
  </div>
</div>

```html
<span class="h-3-block w-5-block p-1 mc-sign text-2xl">...</span>
<div class="h-24 w-40 p-0.5 mc-sign">
  <span>...<span class="text-mc-blue">...</span>...</span>
</div>
```

### `mc-button`

<div class="flex flex-wrap items-center justify-center gap-4 p-4">
  <button class="mc-button py-2 px-4 text-xl">X</button>
  <button class="mc-button w-1/6 h-1-block"></button>
  <button class="mc-button w-1/5 h-1-block"></button>
  <button class="mc-button w-1/4 h-1-block"></button>
  <button class="mc-button w-1/3 h-1-block"></button>
  <button class="mc-button w-1/2 h-1-block"></button>
  <button class="mc-button w-full h-1-block text-xl">Back to title screen</button>
</div>

```html
<button class="mc-button py-2 px-4 text-xl">X</button>
  ...
<button class="mc-button w-1/4 h-1-block"></button>
  ...
<button class="mc-button w-full h-1-block text-xl">Back to title screen</button>
```

## Utilities

### Custom

#### `mc-block-size`

<div class="flex flex-wrap items-end p-4 gap-1/2-block">
  <div class="mc-block-size-96 h-1-block w-1-block bg-mc-block-cobblestone"></div>
  <div class="mc-block-size-72 h-1-block w-1-block bg-mc-block-cobblestone"></div>
  <div class="h-1-block w-1-block bg-mc-block-cobblestone"></div>
</div>

Sizes: `4, 8, 12, ..., 256`

```html
<div class="mc-block-size-96 h-1-block w-1-block bg-mc-block-cobblestone"></div>
<div class="mc-block-size-72 h-1-block w-1-block bg-mc-block-cobblestone"></div>
<div class="h-1-block w-1-block bg-mc-block-cobblestone"></div>
```

#### `mc-gui-zoom`

<div class="flex flex-wrap items-end p-4 gap-1/2-block">
  <div class="h-2-block w-2-block p-1 mc-gui-zoom-2 bg-mc-map"></div>
  <div class="h-2-block w-2-block p-1 mc-gui-zoom-3 bg-mc-map"></div>
  <div class="h-2-block w-2-block p-1 mc-gui-zoom-5 bg-mc-map"></div>
</div>

Sizes: `1, 2, 3, ..., 32`

```html
<div class="h-2-block w-2-block p-1 mc-gui-zoom-2 bg-mc-map"></div>
<div class="h-2-block w-2-block p-1 mc-gui-zoom-3 bg-mc-map"></div>
<div class="h-2-block w-2-block p-1 mc-gui-zoom-5 bg-mc-map"></div>
```

### Backgrounds

#### `bg-mc-map`

<div class="h-2-block w-2-block m-4 bg-mc-map"></div>

#### `bg-mc-achievement`

<div class="h-1-block w-5-block m-4 bg-mc-achievement"></div>

#### `bg-mc-gui-panel`

<div class="h-2-block w-3-block m-4 bg-mc-gui-panel"></div>

#### `bg-mc-gui-slot`

<div class="h-1-block w-1-block m-4 bg-mc-gui-slot"></div>

#### `bg-mc-gui-raised`

<div class="h-1-block w-1-block m-4 bg-mc-gui-raised"></div>

#### `bg-mc-gui-raised-active`

<div class="h-1-block w-1-block m-4 bg-mc-gui-raised-active"></div>

#### `bg-mc-gui-raised-disabled`

<div class="h-1-block w-1-block m-4 bg-mc-gui-raised-disabled"></div>

#### `bg-mc-gui-button`

<button class="w-min m-4 py-1/4-block px-1-block bg-mc-gui-button">Click</button>

#### `bg-mc-gui-alt-raised`

<div class="h-1-block w-1-block m-4 bg-mc-gui-alt-raised"></div>

#### `bg-mc-gui-alt-raised-active`

<div class="h-1-block w-1-block m-4 bg-mc-gui-alt-raised-active"></div>

#### `bg-mc-gui-alt-raised-disabled`

<div class="h-1-block w-1-block m-4 bg-mc-gui-alt-raised-disabled"></div>

#### `bg-mc-gui-alt-button`

<button class="w-min m-4 py-1/4-block px-1-block bg-mc-gui-alt-button">Click</button>

#### `bg-mc-gui-alt-textbox`

<div class="flex flex-col gap-4 p-4">
  <div type="text" class="h-1/2-block w-3-block bg-mc-gui-alt-textbox"></div>
  <input type="text" class="h-8 w-5-block px-2 bg-mc-gui-alt-textbox-active" />
</div>

### Borders

#### `border-mc-gui-panel`

<div class="h-2-block w-3-block m-4 border-mc-gui-panel"></div>

#### `border-mc-gui-slot`

<div class="h-1-block w-1-block m-4 border-mc-gui-slot"></div>

#### `border-mc-gui-raised`

<div class="h-1-block w-1-block m-4 border-mc-gui-raised"></div>

### Colors

<div class="flex flex-wrap items-center justify-center gap-4 m-4 p-4 bg-mc-achievement">
    <p class="m-0 text-mc-gray-1">mc-gray-1</p>
    <p class="m-0 text-mc-gray-2">mc-gray-2</p>
    <p class="m-0 text-mc-gray-3">mc-gray-3</p>
    <p class="m-0 text-mc-gray-4">mc-gray-4</p>
    <p class="m-0 text-mc-gray-5">mc-gray-5</p>
    <p class="m-0 text-mc-gray-6">mc-gray-6</p>
    <p class="m-0 text-mc-text">mc-text</p>
    <p class="m-0 text-mc-accent">mc-accent</p>
    <p class="m-0 text-mc-active">mc-active</p>
    <!-- Text -->
    <p class="m-0 text-mc-dark-blue">mc-dark-blue</p>
    <p class="m-0 text-mc-dark-green">mc-dark-green</p>
    <p class="m-0 text-mc-dark-aqua">mc-dark-aqua</p>
    <p class="m-0 text-mc-dark-red">mc-dark-red</p>
    <p class="m-0 text-mc-dark-purple">mc-dark-purple</p>
    <p class="m-0 text-mc-gold">mc-gold</p>
    <p class="m-0 text-mc-gray">mc-gray</p>
    <p class="m-0 text-mc-dark-gray">mc-dark-gray</p>
    <p class="m-0 text-mc-blue">mc-blue</p>
    <p class="m-0 text-mc-green">mc-green</p>
    <p class="m-0 text-mc-aqua">mc-aqua</p>
    <p class="m-0 text-mc-red">mc-red</p>
    <p class="m-0 text-mc-light-purple">mc-light-purple</p>
    <p class="m-0 text-mc-yellow">mc-yellow</p>
    <!-- Wool -->
    <p class="m-0 text-wool-orange">wool-orange</p>
    <p class="m-0 text-wool-magenta">wool-magenta</p>
    <p class="m-0 text-wool-light-blue">wool-light-blue</p>
    <p class="m-0 text-wool-yellow">wool-yellow</p>
    <p class="m-0 text-wool-lime">wool-lime</p>
    <p class="m-0 text-wool-pink">wool-pink</p>
    <p class="m-0 text-wool-gray">wool-gray</p>
    <p class="m-0 text-wool-light-gray">wool-light-gray</p>
    <p class="m-0 text-wool-cyan">wool-cyan</p>
    <p class="m-0 text-wool-purple">wool-purple</p>
    <p class="m-0 text-wool-blue">wool-blue</p>
    <p class="m-0 text-wool-brown">wool-brown</p>
    <p class="m-0 text-wool-green">wool-green</p>
    <p class="m-0 text-wool-red">wool-red</p>
    <p class="m-0 text-wool-black">wool-black</p>
    <!-- Steve -->
    <p class="m-0 text-steve-shirt">steve-shirt</p>
    <p class="m-0 text-steve-pants">steve-pants</p>
    <!-- Grass -->
    <p class="m-0 text-grass-jungle">grass-jungle</p>
    <p class="m-0 text-grass-dark-forest">grass-dark-forest</p>
    <p class="m-0 text-grass-swamp-green">grass-swamp-green</p>
    <p class="m-0 text-grass-plains">grass-plains</p>
    <p class="m-0 text-grass-forest">grass-forest</p>
    <p class="m-0 text-grass-birch-forest">grass-birch-forest</p>
    <p class="m-0 text-grass-ocean">grass-ocean</p>
    <p class="m-0 text-grass-meadow">grass-meadow</p>
    <p class="m-0 text-grass-tiaga">grass-tiaga</p>
    <p class="m-0 text-grass-snowy">grass-snowy</p>
    <p class="m-0 text-grass-swamp">grass-swamp</p>
    <p class="m-0 text-grass-badlands">grass-badlands</p>
    <p class="m-0 text-grass-desert">grass-desert</p>
    <!-- Foilage -->
    <p class="m-0 text-foilage-jungle">foilage-jungle</p>
    <p class="m-0 text-foilage-dark-forest">foilage-dark-forest</p>
    <p class="m-0 text-foilage-swamp-green">foilage-swamp-green</p>
    <p class="m-0 text-foilage-plains">foilage-plains</p>
    <p class="m-0 text-foilage-forest">foilage-forest</p>
    <p class="m-0 text-foilage-birch-forest">foilage-birch-forest</p>
    <p class="m-0 text-foilage-ocean">foilage-ocean</p>
    <p class="m-0 text-foilage-meadow">foilage-meadow</p>
    <p class="m-0 text-foilage-tiaga">foilage-tiaga</p>
    <p class="m-0 text-foilage-snowy">foilage-snowy</p>
    <p class="m-0 text-foilage-swamp">foilage-swamp</p>
    <p class="m-0 text-foilage-badlands">foilage-badlands</p>
    <p class="m-0 text-foilage-desert">foilage-desert</p>
    <!-- Water -->
    <p class="m-0 text-water-ocean-warm">water-ocean-warm</p>
    <p class="m-0 text-water-ocean-lukewarm">water-ocean-lukewarm</p>
    <p class="m-0 text-water-ocean-cold">water-ocean-cold</p>
    <p class="m-0 text-water-ocean-frozen">water-ocean-frozen</p>
    <p class="m-0 text-water-forest-birch">water-forest-birch</p>
    <p class="m-0 text-water-forest-birch-hills">water-forest-birch-hills</p>
    <p class="m-0 text-water-forest-dark">water-forest-dark</p>
    <p class="m-0 text-water-forest-flower">water-forest-flower</p>
    <p class="m-0 text-water-meadow">water-meadow</p>
    <p class="m-0 text-water-river">water-river</p>
    <p class="m-0 text-water-mountain-gravel">water-mountain-gravel</p>
    <p class="m-0 text-water-mountain">water-mountain</p>
    <p class="m-0 text-water-beach">water-beach</p>
    <p class="m-0 text-water-beach-snowy">water-beach-snowy</p>
    <p class="m-0 text-water-stone-shore">water-stone-shore</p>
    <p class="m-0 text-water-jungle">water-jungle</p>
    <p class="m-0 text-water-jungle-hills">water-jungle-hills</p>
    <p class="m-0 text-water-tiaga">water-tiaga</p>
    <p class="m-0 text-water-tiaga-hills">water-tiaga-hills</p>
    <p class="m-0 text-water-tiaga-snowy">water-tiaga-snowy</p>
    <p class="m-0 text-water-savanna">water-savanna</p>
    <p class="m-0 text-water-savanna-plateau">water-savanna-plateau</p>
    <p class="m-0 text-water-desert">water-desert</p>
    <p class="m-0 text-water-desert-hills">water-desert-hills</p>
    <p class="m-0 text-water-badlands">water-badlands</p>
    <p class="m-0 text-water-badlands-plateau">water-badlands-plateau</p>
    <p class="m-0 text-water-swamp">water-swamp</p>
    <p class="m-0 text-water-swamp-hills">water-swamp-hills</p>
    <p class="m-0 text-water-mushroom">water-mushroom</p>
    <p class="m-0 text-water-mushroom-shore">water-mushroom-shore</p>
    <p class="m-0 text-water-end">water-end</p>
    <p class="m-0 text-water-nether">water-nether</p>
</div>