export const CODE_SNIPPETS: Object = {
  JavaScript: `\nfunction greetings(name) {\n\tconsole.log("Welcome, " + name);\n}\n\ngreetings("Mickey");\n`,
  Go: `
  package main

  import "fmt"
  
  func main() {
      fmt.Println("hello world")
  }
  `,
  Python: `def greetings(name): \n\tprint("Welcome, " + name) 
  \ngreetings("Mickey")
`,
};

export const LANGUAGE_VERSIONS = {
  javascript: "1.32.3",
  go: "1.16.2",
  python: "3.10.0",
};
