### Testing presentational components
  - Presentational components are components that do not manage state. This component are used to present data received from parent components.
#### Create snapshots
  - Snapshots tests are a good tool when we want to make sure the HTLM output of a component does not change unexpectedly or we have harcoded information.
    - For example: The developers change the component HTML structure, by adding another paragraph element with statis text. By modifying this the test will fail and provide a visual of the changes.
    - To test with snapshots:
      1. Import **render** method.
        `import { render } from '../../utils/test-utils';`
      2. Use object destructurin to get **container** off the rendered component. This will repensent the resulting HTML output.
        `const { container } = render(<PresentationalComponent />);`
      3. Use the **toMatchInlineSnapshot** method to capture the HTML output.
        `expect(container).toMatchInlineSnapshot(`
          `<div>`
            `<div`
              `class="card text-center m-1"`
              `style="width: 18rem;"`
            `>`
              `<i`
                `class="material-icons"`
                `style="font-size: 4rem;"`
              `>`
                `airplanemode_active`
              `</i>`
              `<h4>`
                `Travel Anywhere`
              `</h4>`
              `<p`
                `class="p-1"`
              `>`
               ` Our premium package allows you to take exotic trips anywhere at the cheapest prices!`
              `</p>`
            `</div>`
          `</div>`
        `);`
    - Next time someone change the output of the PresentationalComponent the test will fail. You can try changing in the PresentationalComponent the **<h4>** text to Go Anywhere.
    - If the cange was intetional you can update the snapthot directly in your test code or running **npm test -- -u**

