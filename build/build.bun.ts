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
--foreground: ${Math.round(colors.colors.text.hsl.h * 100) / 100} ${Math.round(colors.colors.text.hsl.s * 100) / 100}% ${Math.round(colors.colors.text.hsl.l * 100) / 100}%; /* ${flavor} text */

--muted: ${Math.round(colors.colors.surface0.hsl.h * 100) / 100} ${Math.round(colors.colors.surface0.hsl.s * 100) / 100}% ${Math.round(colors.colors.surface0.hsl.l * 100) / 100}%; /* ${flavor} surface0 */
--muted-foreground: ${Math.round(colors.colors.subtext1.hsl.h * 100) / 100} ${Math.round(colors.colors.subtext1.hsl.s * 100) / 100}% ${Math.round(colors.colors.subtext1.hsl.l * 100) / 100}%; /* ${flavor} subtext1 */

--popover: ${Math.round(colors.colors.base.hsl.h * 100) / 100} ${Math.round(colors.colors.base.hsl.s * 100) / 100}% ${Math.round(colors.colors.base.hsl.l * 100) / 100}%; /* ${flavor} base */
--popover-foreground: ${Math.round(colors.colors.text.hsl.h * 100) / 100} ${Math.round(colors.colors.text.hsl.s * 100) / 100}% ${Math.round(colors.colors.text.hsl.l * 100) / 100}%; /* ${flavor} text */

--card: ${Math.round(colors.colors.base.hsl.h * 100) / 100} ${Math.round(colors.colors.base.hsl.s * 100) / 100}% ${Math.round(colors.colors.base.hsl.l * 100) / 100}%; /* ${flavor} base */
--card-foreground: ${Math.round(colors.colors.text.hsl.h * 100) / 100} ${Math.round(colors.colors.text.hsl.s * 100) / 100}% ${Math.round(colors.colors.text.hsl.l * 100) / 100}%; /* ${flavor} text */

--border: ${Math.round(colors.colors.surface1.hsl.h * 100) / 100} ${Math.round(colors.colors.surface1.hsl.s * 100) / 100}% ${Math.round(colors.colors.surface1.hsl.l * 100) / 100}%; /* ${flavor} surface1 */
--input: ${Math.round(colors.colors.surface1.hsl.h * 100) / 100} ${Math.round(colors.colors.surface1.hsl.s * 100) / 100}% ${Math.round(colors.colors.surface1.hsl.l * 100) / 100}%; /* ${flavor} surface1 */

--primary:${Math.round(colors.colors[accent].hsl.h * 100) / 100} ${Math.round(colors.colors[accent].hsl.s * 100) / 100}% ${Math.round(colors.colors[accent].hsl.l * 100) / 100}%; /* ${flavor} ${accent} */
--primary-foreground: ${Math.round(colors.colors.base.hsl.h * 100) / 100} ${Math.round(colors.colors.base.hsl.s * 100) / 100}% ${Math.round(colors.colors.base.hsl.l * 100) / 100}%; /* ${flavor} base */

--secondary: ${Math.round(colors.colors.surface0.hsl.h * 100) / 100} ${Math.round(colors.colors.surface0.hsl.s * 100) / 100}% ${Math.round(colors.colors.surface0.hsl.l * 100) / 100}%; /* ${flavor} surface0 */
--secondary-foreground: ${Math.round(colors.colors.text.hsl.h * 100) / 100} ${Math.round(colors.colors.text.hsl.s * 100) / 100}% ${Math.round(colors.colors.text.hsl.l * 100) / 100}%; /* ${flavor} text */

--accent: ${Math.round(colors.colors.surface0.hsl.h * 100) / 100} ${Math.round(colors.colors.surface0.hsl.s * 100) / 100}% ${Math.round(colors.colors.surface0.hsl.l * 100) / 100}%; /* ${flavor} surface0 */
--accent-foreground: ${Math.round(colors.colors.text.hsl.h * 100) / 100} ${Math.round(colors.colors.text.hsl.s * 100) / 100}% ${Math.round(colors.colors.text.hsl.l * 100) / 100}%; /* ${flavor} text */

--destructive: ${Math.round(colors.colors.red.hsl.h * 100) / 100} ${Math.round(colors.colors.red.hsl.s * 100) / 100}% ${Math.round(colors.colors.red.hsl.l * 100) / 100}%; /* ${flavor} red */
--destructive-foreground: ${Math.round(colors.colors.mantle.hsl.h * 100) / 100} ${Math.round(colors.colors.mantle.hsl.s * 100) / 100}% ${Math.round(colors.colors.mantle.hsl.l * 100) / 100}%; /* ${flavor} mantle */

--ring: ${Math.round(colors.colors.text.hsl.h * 100) / 100} ${Math.round(colors.colors.text.hsl.s * 100) / 100}% ${Math.round(colors.colors.text.hsl.l * 100) / 100}%; /* ${flavor} text */

--radius: 0.5rem;
        `
      )
    }
  }
  console.log(`Files for ${flavor} created!`)
}
