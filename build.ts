import { flavorEntries } from "@catppuccin/palette";
import { $ } from "bun";

console.log("Deleting old files...");
await $`rm -rf ./themes/*`;

for (const [flavor, colors] of flavorEntries) {
  console.log(`Creating files for ${flavor}...`);
  await $`mkdir ./themes/${flavor}`;

  for (const { name } of Object.values(colors.colors).filter((color) => color.accent)) {
    const accent = name.toLowerCase();
    const destination = `./themes/${flavor}/${flavor}-${accent}.css`
    await $`touch ${destination}`;
    Bun.write(
      destination,
      `
--background: ${+colors.colors.base.hsl.h.toFixed(3)} ${(+colors.colors.base.hsl.s * 100).toFixed(3)}% ${(+colors.colors.base.hsl.l * 100).toFixed(3)}%; /* base */
--foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* text */

--muted: ${+colors.colors.surface0.hsl.h.toFixed(3)} ${(+colors.colors.surface0.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface0.hsl.l * 100).toFixed(3)}%; /* surface0 */
--muted-foreground: ${+colors.colors.subtext1.hsl.h.toFixed(3)} ${(+colors.colors.subtext1.hsl.s * 100).toFixed(3)}% ${(+colors.colors.subtext1.hsl.l * 100).toFixed(3)}%; /* subtext1 */

--popover: ${+colors.colors.base.hsl.h.toFixed(3)} ${(+colors.colors.base.hsl.s * 100).toFixed(3)}% ${(+colors.colors.base.hsl.l * 100).toFixed(3)}%; /* base */
--popover-foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* text */

--card: ${+colors.colors.base.hsl.h.toFixed(3)} ${(+colors.colors.base.hsl.s * 100).toFixed(3)}% ${(+colors.colors.base.hsl.l * 100).toFixed(3)}%; /* base */
--card-foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* text */

--border: ${+colors.colors.surface1.hsl.h.toFixed(3)} ${(+colors.colors.surface1.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface1.hsl.l * 100).toFixed(3)}%; /* surface1 */
--input: ${+colors.colors.surface1.hsl.h.toFixed(3)} ${(+colors.colors.surface1.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface1.hsl.l * 100).toFixed(3)}%; /* surface1 */

--primary: ${+colors.colors[accent].hsl.h.toFixed(3)} ${(+colors.colors[accent].hsl.s * 100).toFixed(3)}% ${(+colors.colors[accent].hsl.l * 100).toFixed(3)}%; /* ${accent} */
--primary-foreground: ${+colors.colors.base.hsl.h.toFixed(3)} ${(+colors.colors.base.hsl.s * 100).toFixed(3)}% ${(+colors.colors.base.hsl.l * 100).toFixed(3)}%; /* base */

--secondary: ${+colors.colors.surface0.hsl.h.toFixed(3)} ${(+colors.colors.surface0.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface0.hsl.l * 100).toFixed(3)}%; /* surface0 */
--secondary-foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* text */

--accent: ${+colors.colors.surface0.hsl.h.toFixed(3)} ${(+colors.colors.surface0.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface0.hsl.l * 100).toFixed(3)}%; /* surface0 */
--accent-foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* text */

--destructive: ${+colors.colors.red.hsl.h.toFixed(3)} ${(+colors.colors.red.hsl.s * 100).toFixed(3)}% ${(+colors.colors.red.hsl.l * 100).toFixed(3)}%; /* red */
--destructive-foreground: ${+colors.colors.mantle.hsl.h.toFixed(3)} ${(+colors.colors.mantle.hsl.s * 100).toFixed(3)}% ${(+colors.colors.mantle.hsl.l * 100).toFixed(3)}%; /* mantle */

--ring: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* text */

--radius: 0.5rem;
      `.trim(),
    );
  }
  console.log(`Files created!`);
}
