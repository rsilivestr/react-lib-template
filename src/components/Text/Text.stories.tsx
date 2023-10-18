import Text from './Text';

export default {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: [undefined, 'center', 'left', 'right'],
      control: { type: 'radio' },
    },
  },
};

export const Heading = {
  args: {
    children: 'Hello world!',
    variant: 'h1',
  },
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3'],
      control: { type: 'select' },
    },
  },
};

export const Body = {
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi delectus fuga totam iusto dignissimos. Aperiam quis ipsa qui sint id, autem voluptatibus neque ipsam illum inventore dignissimos sed adipisci dolorem sunt aspernatur ducimus eveniet esse? Fugiat, at id ipsa, accusamus nostrum iure ex ratione commodi, maiores velit maxime corrupti culpa!',
  },
};
