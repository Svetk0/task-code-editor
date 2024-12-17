export const CODE_SNIPPETS: Object = {
  javascript: `\nfunction greetings(name) {\n\tconsole.log("Welcome, " + name);\n}\n\ngreetings("Mickey");\n`,
  go: `
  package main
  import "fmt"

  func greetings(name string) {
    fmt.Println("Welcome, " name)
  }
  
  func main() {
    greetings("Mickey")
  }`,
  python: `def greetings(name): \n\tprint("Welcome, " + name) 
  \ngreetings("Mickey")
`,
};
