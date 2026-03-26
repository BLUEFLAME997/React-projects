export const LANGUAGE_VERSIONS = {
  javascript: 63,
  typescript: 74,
  python: 71,
  java: 62,
  csharp: 51,
  php: 68,
};


export const CODE_SNIPPETS = {
  javascript: "function greet(name) {\n\tconsole.log(\"Hello, \" + name + \"!\");\n}\n\ngreet(\"Alex\");\n",
  typescript: "type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log(\"Hello, \" + data.name + \"!\");\n}\n\ngreet({ name: \"Alex\" });\n",
  python: "def greet(name):\n\tprint(\"Hello, \" + name + \"!\")\n\ngreet(\"Alex\")\n",
  java: "public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}\n",
  csharp: "using System;\n\nnamespace HelloWorld{\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine(\"Hello World in C#\");\n\t\t}\n\t}\n}\n",
  php: "<?php\n$name = 'Alex';\necho $name;\n",
};