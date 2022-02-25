import { Box } from "@chakra-ui/react";
import { FC } from "react";

export type CardProps = {
  urlBackground: string;
  titleContent: React.ReactNode;
  content: string;
  buttonName?: string;
  isShowButton?: boolean;
}

export const Card: FC<CardProps> = (props) => {
  const { urlBackground, titleContent, content, buttonName, isShowButton = false } = props;
  return (
    <Box
      boxShadow='0px 12px 18px rgba(23, 23, 37, 0.04)'
      borderRadius='4px'
      boxSizing='border-box'
      border='1px solid #F1F1F5'
      minH={{ sm: '240px' }}
    >
      <Box
        h={{ sm: '98px' }}
        w={{ sm: '200px' }}
        backgroundImage={urlBackground}
        borderTopRadius='4px'
        bgSize='cover'
        ml='-1px'
      />
      <Box p={{ sm: '16px' }}>
        {titleContent}
        <Box
          as={'p'}
          fontWeight={400}
          fontSize={{ sm: '1rem' }}
          lineHeight={{ sm: '1.5rem' }}
          color='#92929D'
        >
          {content}
        </Box>
        {
          isShowButton &&
          <Box
            as={'span'}
            color='blueDark'
            cursor='pointer'
            fontSize={{ sm: '0.875rem' }}
            lineHeight={{ sm: '1.25rem' }}
          >
            {buttonName}
          </Box>
        }
      </Box>
    </Box>
  );
}
