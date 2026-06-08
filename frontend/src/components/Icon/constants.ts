import { FC } from 'react';

interface IconModule {
  default: FC;
}

const components = import.meta.glob<IconModule>('./components/**/*.tsx', {
  eager: true,
});

export const ICON_COMPS: Record<string, FC> = Object.entries(
  components,
).reduce<Record<string, FC>>(
  (memo, [path, component]) => ({
    ...memo,
    [path.replace(/\.\/components\/|\.tsx$/g, '')]: component.default,
  }),
  {},
);

export const ICONS_TYPES: Record<string, string> = {};
Object.keys(ICON_COMPS).forEach((item) => {
  ICONS_TYPES[item] = item;
});
