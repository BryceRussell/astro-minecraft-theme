import os
 
os.chdir(r'C:\Users\bryce\Desktop\Projects\Astro projects\astro-minecraft-theme\public\imgs\ui')
 
for count, f in enumerate(os.listdir()):
    f_name, f_ext = os.path.splitext(f)
    f_name = f_name.replace('slot-large', 'large-slot')
 
    new_name = f'{f_name}{f_ext}'
    os.rename(f, new_name)