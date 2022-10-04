import { Show, useMetadata } from '@builder.io/mitosis';
import './button.css';
import { ButtonProps } from './button.model';

useMetadata({ isAttachedToShadowDom: true });

export default function Button(props: ButtonProps) {
  return (
    <Show when={state.loaded}>
      <button class={state.classes.base}>{props.children}</button>
    </Show>
  );
}
