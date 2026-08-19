# THE GERMAN — Team App

Die interne Team-App der Zahnarztpraxis THE GERMAN, Canggu, Bali.

**Dieses Repository enthaelt ausschliesslich die ausgelieferte Datei.**
Es ist die Veroeffentlichung, nicht die Werkstatt. Entwicklung, Datenbank,
Analysen und Projektsteuerung liegen in einer getrennten, privaten Ablage.

## Was das hier ist

Eine einzelne HTML-Datei ohne Abhaengigkeiten und ohne Bauwerkzeug. Sie wird
auf dem Handy einmal zum Startbildschirm hinzugefuegt und verhaelt sich danach
wie eine App.

Inhalte holt sie erst **nach der Anmeldung** aus der Datenbank der Klinik
(Supabase, Singapur). Dort gilt fuer jede Tabelle eine Sichtbarkeitsregel:
Wer nicht angemeldet ist, bekommt nichts. Der enthaltene Schluessel ist der
oeffentliche Anon-Schluessel, der genau dafuer gemacht ist.

**Keine Patientendaten.** Das Datenmodell hat kein Feld fuer Patientennamen.

## Aendern

Nicht hier. Diese Datei wird aus der privaten Ablage heraus veroeffentlicht.
Eine Aenderung direkt in diesem Repository wird beim naechsten Mal
ueberschrieben.
