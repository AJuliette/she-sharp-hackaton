
import Combobox from 'next';

export default function ComboboxFunction({
    placeholder
    }) {
    return (
        <Combobox placeholder={placeholder}>
            <Combobox.Input />
            <Combobox.List>
                <Combobox.Option value="a">One</Combobox.Option>
                <Combobox.Option value="b">Two</Combobox.Option>
                <Combobox.Option value="c">Three</Combobox.Option>
            </Combobox.List>
        </Combobox>
    );
}
