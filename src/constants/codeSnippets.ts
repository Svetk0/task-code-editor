export const CODE_SNIPPETS: Object = {
  JavaScript: `\nfunction greetings(name) {\n\tconsole.log("Welcome, " + name);\n}\n\ngreetings("Mickey");\n`,
  Go: `
  package main
  import "fmt"

  func greetings(name string) {
    fmt.Println("Welcome, " name)
  }
  
  func main() {
    greetings("Mickey")
  }`,
  Python: `def greetings(name): \n\tprint("Welcome, " + name) 
  \ngreetings("Mickey")
`,
};
