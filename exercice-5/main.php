<?php

class ConcertTicket {

  public $artistName;
  public $placeNumber;
  public $date;
  public $hour;
  public $price;

  function __construct($artistName, $placeNumber, $date, $hour, $price=null) {

    $this->artistName = $artistName;
    $this->placeNumber = $placeNumber;
    $this->date = $date;
    $this->hour = $hour;
    if (!is_null($price)) {
      $this->price = $price;
    }
  }

  function __htmlDetail() {
   $htmlContent = "
      <p>Nom de l'artiste : $this->artistName </p>
      <p>Numero de place : $this->placeNumber</p>
      <p>Jour du concert : $this->date</p>
     <p> Heure du concert : $this->hour</p> ";
    if (!is_null($this->price)) {
      $htmlContent = $htmlContent . "<p> Prix du concert : $this->price</p>";
    }
    return $htmlContent;
  }
}

$ticket01 = new ConcertTicket("Franky Vincent", "23", "15/10/2008", "21");
echo ($ticket01->__htmlDetail());
$ticket02 = new ConcertTicket("Helene Segara", "01", "01/02/2020", "21", "23.90");
