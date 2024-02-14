import { flavorEntries } from "@catppuccin/palette";
import { $ } from 'bun';
console.log("Deleting old files...")
await $`rm -rf ./dist/*`
for (const [flavor, colors] of flavorEntries) {
  console.log(`Creating files for ${flavor}...`)
  await $`mkdir ./dist/${flavor}`
  for (const entry of colors.colorEntries) {
    if (entry[1].accent) {
      const accent = entry[1].name.toLowerCase()
      await $`touch ./dist/${flavor}/${flavor}-${accent}.css`
      Bun.write(
        `./dist/${flavor}/${flavor}-${accent}.css`,
        `
--background: ${colors.colors.base.hsl.h} ${colors.colors.base.hsl.s}% ${colors.colors.base.hsl.l}%; /* ${flavor} base */
--foreground: ${colors.colors.text.hsl.h} ${colors.colors.text.hsl.s}% ${colors.colors.text.hsl.l}%; /* ${flavor} text */

--muted: ${colors.colors.surface0.hsl.h} ${colors.colors.surface0.hsl.s}% ${colors.colors.surface0.hsl.l}%; /* ${flavor} surface0 */
--muted-foreground: ${colors.colors.subtext1.hsl.h} ${colors.colors.subtext1.hsl.s}% ${colors.colors.subtext1.hsl.l}%; /* ${flavor} subtext1 */

--popover: ${colors.colors.base.hsl.h} ${colors.colors.base.hsl.s}% ${colors.colors.base.hsl.l}%; /* ${flavor} base */
--popover-foreground: ${colors.colors.text.hsl.h} ${colors.colors.text.hsl.s}% ${colors.colors.text.hsl.l}%; /* ${flavor} text */

--card: ${colors.colors.base.hsl.h} ${colors.colors.base.hsl.s}% ${colors.colors.base.hsl.l}%; /* ${flavor} base */
--card-foreground: ${colors.colors.text.hsl.h} ${colors.colors.text.hsl.s}% ${colors.colors.text.hsl.l}%; /* ${flavor} text */

--border: ${colors.colors.surface1.hsl.h} ${colors.colors.surface1.hsl.s}% ${colors.colors.surface1.hsl.l}%; /* ${flavor} surface1 */
--input: ${colors.colors.surface1.hsl.h} ${colors.colors.surface1.hsl.s}% ${colors.colors.surface1.hsl.l}%; /* ${flavor} surface1 */

--primary:${colors.colors[accent].hsl.h} ${colors.colors[accent].hsl.s}% ${colors.colors[accent].hsl.l}%; /* ${flavor} ${accent} */
--primary-foreground: ${colors.colors.base.hsl.h} ${colors.colors.base.hsl.s}% ${colors.colors.base.hsl.l}%; /* ${flavor} base */

--secondary: ${colors.colors.surface0.hsl.h} ${colors.colors.surface0.hsl.s}% ${colors.colors.surface0.hsl.l}%; /* ${flavor} surface0 */
--secondary-foreground: ${colors.colors.text.hsl.h} ${colors.colors.text.hsl.s}% ${colors.colors.text.hsl.l}%; /* ${flavor} text */

--accent: ${colors.colors.surface0.hsl.h} ${colors.colors.surface0.hsl.s}% ${colors.colors.surface0.hsl.l}%; /* ${flavor} surface0 */
--accent-foreground: ${colors.colors.text.hsl.h} ${colors.colors.text.hsl.s}% ${colors.colors.text.hsl.l}%; /* ${flavor} text */

--destructive: ${colors.colors.red.hsl.h} ${colors.colors.red.hsl.s}% ${colors.colors.red.hsl.l}%; /* ${flavor} red */
--destructive-foreground: ${colors.colors.mantle.hsl.h} ${colors.colors.mantle.hsl.s}% ${colors.colors.mantle.hsl.l}%; /* ${flavor} mantle */

--ring: ${colors.colors.text.hsl.h} ${colors.colors.text.hsl.s}% ${colors.colors.text.hsl.l}%; /* ${flavor} text */

--radius: 0.5rem;
        `
      )
    }
  }
  console.log(`Files for ${flavor} created!`)
}
