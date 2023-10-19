import * as React from 'react';
import * as Ariakit from '@ariakit/react';
import styles from './LinkForm.module.css';
import { TLink } from '../../types';
import { useLinkStore } from '../../stores';
import { LinkInput, SelectInput } from '..';
import { linkHelpers } from '../../helpers';
import { PLATFORMS } from '../../constants';
import IconDragAndDrop from '../../assets/icon-drag-and-drop.svg?react';

interface LinkFormProps extends TLink {
  index: number;
}

function LinkForm({ index, platform, uid, url }: LinkFormProps) {
  const updateLink = useLinkStore((store) => store.updateLink);
  const deleteLink = useLinkStore((store) => store.deleteLink);
  const form = Ariakit.useFormStore({ defaultValues: { platform, url } });

  form.useSubmit(async (state) => {
    updateLink(uid, state.values.platform, state.values.url);
    alert(JSON.stringify(state.values));
  });

  const placeholder = React.useMemo(() => linkHelpers.getLinkPlaceholder(platform), [platform]);
  return (
    <Ariakit.Form store={form} className={styles.container}>
      <div className={styles.top}>
        <IconDragAndDrop />
        <span>{`Link #${index + 1}`}</span>
        <button type="button" onClick={() => deleteLink(uid)}>
          Remove
        </button>
      </div>
      <SelectInput.FormSelect name={form.names.platform}>
        {PLATFORMS.map((item, index) => (
          <SelectInput.SelectItem key={`${index}-${item}`} value={item} />
        ))}
      </SelectInput.FormSelect>
      <LinkInput
        store={form}
        name={form.names.url}
        label="Link"
        platform={platform}
        type="text"
        placeholder={placeholder}
      />
    </Ariakit.Form>
  );
}

export default LinkForm;
