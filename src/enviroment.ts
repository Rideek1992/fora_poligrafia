export const enviroment = {
  production: false,
  apiUrl: 'https://admin.fora-poligrafia.pl',
  mailerUrl: 'https://newmailer.fora-poligrafia.pl',
  contactData: {
    email: 'kontak@fora-poligrafia.pl',
    phone: '507187527',
    openHouers: {
      monday: '08:00 - 18:00',
      tuesday: '08:00 - 18:00',
      wednesday: '08:00 - 18:00',
      thursday: '08:00 - 18:00',
      friday: '08:00 - 18:00',
      saturday: 'nieczynne',
      sunday: 'nieczynne',
    },
    area: {
      city: [
        { name: 'Warszawa' },
        { name: 'Legionowo' },
        { name: 'Chotomów' },
        { name: 'Jabłonna' },
        { name: 'Wieliszew' },
        { name: 'Nieporęt' },
        { name: 'Zegrze' },
        { name: 'Skrzeszew' },
        { name: 'Janówek' },
        { name: 'Olszewnica Stara' },
        { name: 'Olszewnica Nowa' },
        { name: 'Łajski' },
        { name: 'Michałów-Reginów' },
        { name: 'Rajszew' },
        { name: 'Serock' },
        { name: 'Nowy Dwór Mazowiecki' },
        { name: 'Pomiechówek' },
        { name: 'Marki' },
        { name: 'Radzymin' },
        { name: 'Wołomin' },
        { name: 'Ząbki' },
        { name: 'Białołęka' },
        { name: 'Tarchomin' },
        { name: 'Łomianki' },
        { name: 'Izabelin' },
        { name: 'Błonie' },
        { name: 'Ożarów Mazowiecki' },
        { name: 'Pruszków' },
        { name: 'Piastów' },
        { name: 'Brwinów' },
        { name: 'Grodzisk Mazowiecki' },
        { name: 'Milanówek' },
        { name: 'Leszno' },
        { name: 'Stare Babice' },
        { name: 'Kampinos' },
        { name: 'Sochaczew' },
        { name: 'Teresin' },
      ],
    },
  },
  cooperationLookData: [
    {
      title: 'Wysyłasz zapytanie',
      icon: 'fa-thin fa-paper-plane',
      description:
        'Przekazujesz nam podstawowe informacje o swojej potrzebie, zakresie prac, terminie realizacji lub rodzaju usługi. Możesz skorzystać z formularza kontaktowego, napisać bezpośrednio mailowo albo skontaktować się telefonicznie.',
    },
    {
      title: 'Doprecyzowujemy szczegóły',
      icon: 'fa-thin fa-clipboard-list',
      description:
        'Analizujemy Twoje zapytanie i w razie potrzeby wracamy z dodatkowymi pytaniami. Dzięki temu możemy lepiej dopasować zakres współpracy, technologię wykonania, harmonogram oraz sposób realizacji do potrzeb Twojej firmy.',
    },
    {
      title: 'Otrzymujesz propozycję realizacji',
      icon: 'fa-thin fa-file-signature',
      description:
        'Po zebraniu najważniejszych informacji przygotowujemy odpowiedź, proponujemy najlepsze rozwiązanie i przedstawiamy wycenę lub dalsze kroki. Jeśli projekt wymaga szerszego omówienia, ustalamy dogodną formę kontaktu i przechodzimy do kolejnego etapu współpracy.',
    },
  ],
  cooperationDetailsData: [
    {
      title: 'Rodzaj usługi',
      description:
        'Wskaż, czego dotyczy zapytanie — projektu graficznego, druku, identyfikacji wizualnej, strony internetowej, usług dronowych, analizy danych lub innego zakresu współpracy. Dzięki temu od początku wiemy, jak najlepiej poprowadzić temat.',
      icon: 'fa-thin fa-briefcase',
    },
    {
      title: 'Zakres prac lub nakład',
      description:
        'Opisz, czego potrzebujesz i w jakiej skali. W przypadku poligrafii może to być liczba sztuk, format lub rodzaj materiału, a przy usługach cyfrowych zakres projektu, liczba podstron, funkcji lub obszarów do opracowania.',
      icon: 'fa-thin fa-list-check',
    },
    {
      title: 'Termin realizacji',
      description:
        'Jeśli zależy Ci na konkretnym terminie, warto zaznaczyć to już w pierwszej wiadomości. Pozwoli nam to ocenić możliwości realizacyjne i od razu zaproponować odpowiedni sposób działania.',
      icon: 'fa-thin fa-calendar-days',
    },
    {
      title: 'Materiały dodatkowe',
      description:
        'Jeśli masz logo, pliki, inspiracje, zdjęcia, przykłady wcześniejszych realizacji lub inne materiały pomocnicze, warto o nich wspomnieć. Nawet krótki opis tego, czym dysponujesz, pomoże nam lepiej przygotować odpowiedź.',
      icon: 'fa-thin fa-paperclip',
    },
  ],
};
