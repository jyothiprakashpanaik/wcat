# wcat 🐱
Command Line Tool

Cat(concatenate) command is very frequently used in Linux. It reads data from the file and gives their content as output. It helps us to create, view, concatenate files. So let us see some frequently used cat commands. 

```
please Enter a valid command :)

     All commands:
          wcat --help

          wcat <filepath1 filepath2 ...> => to read the contents of the file.
          wcat -s <filepath> => convert big line breaks into a singular line break.
          wcat -n filepath => give numbering to all the lines.
          wcat -b filepath => give numbering to non-empty lines.
          wcat filepath > filename2path => put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist.
          wcat filename2path >> filename2path => append all the content of filename into ~~filename2~~
          wcat [option] <filename> > <filename2> =>get the file content of filename remove large spaces and save the output in filename2
```
