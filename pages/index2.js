import { Container, Title, Text, Button, Stack } from '@mantine/core';

export default function Home() {
  return (
    <Container size="sm" py="xl">
      <Stack spacing="xl">
        <Title order={1}>🌐 NeuroX🚀 VPN</Title>
        <Text>
          Добро пожаловать в NeuroX🚀 VPN! Это мини-приложение поможет вам безопасно и быстро подключаться к VPN
          для обхода ограничений.
        </Text>
        <Button size="lg" fullWidth>
          🔒 Подключиться к VPN
        </Button>
      </Stack>
    </Container>
  );
} 