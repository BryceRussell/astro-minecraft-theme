---
title: 'Introduction'
layout: '../../layouts/Docs.astro'
---

# Astro Minecraft Theme

This is a Minecraft Theme for Astro, it uses textures from in game to create a class based styling system that makes creating minecraft styled elements super easy

---

## First Steps

### **Project Logo**

One of the first things you will want to do is generate a logo for your project using [textstudio](https://www.textstudio.co/logo/minecraft-3d-text-41) with the following settings:
>  - Zoom: 36%
>  - Line Spacing: 10%
>  - Use default for character spacing and rotation
>  - Use the `Minecrafter Regular` font
>  - Navigate to the background tab and uncheck `Background or Transparent` to make background transparent
>  - Navigate to the download tab and select `Medium` quality with `fitted` aspect ratio

  After downloading your project logo all you have to do is rename it to `project-logo.png` and add it to the `./public/imgs` directory in your website folder

### **Favicon**

The default favicon is a grass block, this can be replaced by converting a texture from the `./assets` folder to a `.ico`, renaming it `favicon.ico`, and then replacing the current favicon inside the `./public` folder