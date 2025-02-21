<script>
  import { onMount } from "svelte";

  /**
     * @type {HTMLIFrameElement}
     */
  let iframe;

  onMount(() => {
    if (iframe) {
      let doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>LinkedIn Badge</title>
            <style>
              body { font-family: Arial, sans-serif; background: #eee; text-align: center; padding: 20px; }
              h1 { color: #222; }
            </style>
          </head>
          <body>
            <div class="badge-container">
              <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="iamdipankarj" data-version="v1"></div>
              
            </div>
          </body>
          </html>
        `);
        doc.close();
        // Inject LinkedIn script separately
        let script = doc.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        script.type = "text/javascript";
        doc.body.appendChild(script);
      }
    }
  });
</script>

<iframe bind:this={iframe} style="width: 100%; height: 300px; border: none;" title="LinkedIn Badge" />
