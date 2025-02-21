<script lang="ts">
  import { SkillMap, type Skill } from "../utils/types";

  export let skill: Skill;
  export let className: string = "";

  const mappedSkill = SkillMap[skill]
  const label = mappedSkill.label
  const link = mappedSkill.link
</script>

<a href={link} class={`inline-flex items-center rounded-xl font-semibold px-2 py-1 text-sm whitespace-nowrap select-none border hover:text-inherit ${className}`} rel="nofollow" target="_blank">
  <slot name="icon"></slot>
  {label}
</a>
