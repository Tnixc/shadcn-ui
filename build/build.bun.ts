import { flavorEntries } from "@catppuccin/palette";
import { $ } from "bun";
console.log("Deleting old files...");
await $`rm -rf ./dist/*`;
for (const [flavor, colors] of flavorEntries) {
  console.log(`Creating files for ${flavor}...`);
  await $`mkdir ./dist/${flavor}`;
  for (const entry of colors.colorEntries) {
    if (entry[1].accent) {
      const accent = entry[1].name.toLowerCase();
      await $`touch ./dist/${flavor}/${flavor}-${accent}.css`;
      Bun.write(
        `./dist/${flavor}/${flavor}-${accent}.css`,
        `
--background: ${+colors.colors.base.hsl.h.toFixed(3)} ${(+colors.colors.base.hsl.s * 100).toFixed(3)}% ${(+colors.colors.base.hsl.l * 100).toFixed(3)}%; /* ${flavor} base */
--foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* ${flavor} text */

--muted: ${+colors.colors.surface0.hsl.h.toFixed(3)} ${(+colors.colors.surface0.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface0.hsl.l * 100).toFixed(3)}%; /* ${flavor} surface0 */
--muted-foreground: ${+colors.colors.subtext1.hsl.h.toFixed(3)} ${(+colors.colors.subtext1.hsl.s * 100).toFixed(3)}% ${(+colors.colors.subtext1.hsl.l * 100).toFixed(3)}%; /* ${flavor} subtext1 */

--popover: ${+colors.colors.base.hsl.h.toFixed(3)} ${(+colors.colors.base.hsl.s * 100).toFixed(3)}% ${(+colors.colors.base.hsl.l * 100).toFixed(3)}%; /* ${flavor} base */
--popover-foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* ${flavor} text */

--card: ${+colors.colors.base.hsl.h.toFixed(3)} ${(+colors.colors.base.hsl.s * 100).toFixed(3)}% ${(+colors.colors.base.hsl.l * 100).toFixed(3)}%; /* ${flavor} base */
--card-foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* ${flavor} text */

--border: ${+colors.colors.surface1.hsl.h.toFixed(3)} ${(+colors.colors.surface1.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface1.hsl.l * 100).toFixed(3)}%; /* ${flavor} surface1 */
--input: ${+colors.colors.surface1.hsl.h.toFixed(3)} ${(+colors.colors.surface1.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface1.hsl.l * 100).toFixed(3)}%; /* ${flavor} surface1 */

--primary:${+colors.colors[accent].hsl.h.toFixed(3)} ${(+colors.colors[accent].hsl.s * 100).toFixed(3)}% ${(+colors.colors[accent].hsl.l * 100).toFixed(3)}%; /* ${flavor} ${accent} */
--primary-foreground: ${+colors.colors.base.hsl.h.toFixed(3)} ${(+colors.colors.base.hsl.s * 100).toFixed(3)}% ${(+colors.colors.base.hsl.l * 100).toFixed(3)}%; /* ${flavor} base */

--secondary: ${+colors.colors.surface0.hsl.h.toFixed(3)} ${(+colors.colors.surface0.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface0.hsl.l * 100).toFixed(3)}%; /* ${flavor} surface0 */
--secondary-foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* ${flavor} text */

--accent: ${+colors.colors.surface0.hsl.h.toFixed(3)} ${(+colors.colors.surface0.hsl.s * 100).toFixed(3)}% ${(+colors.colors.surface0.hsl.l * 100).toFixed(3)}%; /* ${flavor} surface0 */
--accent-foreground: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* ${flavor} text */

--destructive: ${+colors.colors.red.hsl.h.toFixed(3)} ${(+colors.colors.red.hsl.s * 100).toFixed(3)}% ${(+colors.colors.red.hsl.l * 100).toFixed(3)}%; /* ${flavor} red */
--destructive-foreground: ${+colors.colors.mantle.hsl.h.toFixed(3)} ${(+colors.colors.mantle.hsl.s * 100).toFixed(3)}% ${(+colors.colors.mantle.hsl.l * 100).toFixed(3)}%; /* ${flavor} mantle */

--ring: ${+colors.colors.text.hsl.h.toFixed(3)} ${(+colors.colors.text.hsl.s * 100).toFixed(3)}% ${(+colors.colors.text.hsl.l * 100).toFixed(3)}%; /* ${flavor} text */

--radius: 0.5rem;
        `,
      );
    }
  }
  console.log(`Files for ${flavor} created!`);
}
