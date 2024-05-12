<x-layout>
    <x-heading>Log In</x-heading>
    <x-forms.form method="POST" action="/register" enctype="multipart/form-data">
        <x-forms.input label="Email" name="email" type="email" required />
        <x-forms.input label="Password" name="password" type="password" required />
        <x-forms.button type="submit">Login</x-forms.button>
    </x-forms.form>
</x-layout>
