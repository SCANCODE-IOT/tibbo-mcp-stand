# Contributing / Как помочь

**EN.** Thank you for stopping by! This project is a beta: the software works on a simulator, and the real
board is the next frontier. Any help counts, even a single `--probe` output from a real LTPP3(G2).

1. **Start with an issue.** Hardware reports, bugs, ideas and "I want to do X" all start there, so nobody
   does the same work twice.
2. **Keep the board dependency-free.** The server runs on the Python standard library (3.9+). If a feature
   truly needs a package, make it optional and fall back gracefully.
3. **Safety first.** Anything that switches a load goes through `Stand.switch_relay`: timers, rate limits,
   e-stop, read-only. Do not bypass it, including in rules or fleet code.
4. **Tests.** `python3 -m unittest discover -s tests`. Add a test for your change. The simulator and
   `tools/mock_ollama.py` let you test without hardware or a GPU.
5. **Facts about hardware need a source.** A datasheet, Tibbo docs or a test on a real board. Write in the
   PR which one.
6. **Small PRs** are merged faster. Russian or English - both are fine everywhere.

**RU.** Спасибо, что заглянули! Проект в бете: программа работает на эмуляторе, а настоящая плата - следующий
рубеж. Пригодится любая помощь, даже один вывод `--probe` с настоящей LTPP3(G2).

1. **Начните с issue.** Отчёты с железа, ошибки, идеи и «хочу сделать вот это» - всё туда, чтобы никто не
   делал одну работу дважды.
2. **На плате - без зависимостей.** Сервер работает на стандартной библиотеке Python 3.9+. Если функции
   правда нужен пакет, сделайте его необязательным и с понятной заменой.
3. **Безопасность - первой.** Всё, что включает нагрузку, идёт через `Stand.switch_relay`: таймеры, лимиты,
   аварийная кнопка, «только чтение». Не обходите их, в том числе в правилах и во флоте.
4. **Тесты.** `python3 -m unittest discover -s tests`. Добавьте тест к своему изменению. Эмулятор и
   `tools/mock_ollama.py` позволяют проверять без железа и видеокарты.
5. **Факты о железе - с источником:** даташит, документация Tibbo или проверка на плате. Укажите в PR, какой.
6. **Небольшие PR** принимаем быстрее. Русский и английский одинаково хороши везде.

Contact / связь: issues here, or iot@scancode.ru.
