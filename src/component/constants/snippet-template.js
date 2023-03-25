export const SnippetTemplate = (snippetName, snippetBody, snippetDescription, snippetShortcut, language, author) => {
    return `<Code Snippet Format="1.1.0" xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <Header>
      <Title>${snippetName}</Title>
      <Author>${author}</Author>
      <Shortcut>${snippetShortcut}</Shortcut>
      <Description>${snippetDescription}</Description>
      <SnippetTypes>
        <SnippetType>Expansion</SnippetType>
        <SnippetType>SurroundsWith</SnippetType>
      </SnippetTypes>
    </Header>
    <Snippet>
      <Declarations>
      </Declarations>
      <Code Language="${language}"><![CDATA[
       ${snippetBody}
      ]]></Code>
    </Snippet>
    </Code Snippet>`;
}

export const LiteralTemplate = `<Literal>
<ID>name</ID>
<ToolTip>Class Name</ToolTip>
<Default>MyClass</Default>
</Literal>`;