import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.177.0/http/file_server.ts";

serve(req => {
    return serveDir(req, {
        fsRoot: ".", // Serves files from the current directory.
        urlRoot: "",
        quiet: true,
    });
});







