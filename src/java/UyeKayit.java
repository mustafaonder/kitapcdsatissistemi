import java.sql.*;

import java.util.Date;

import javax.faces.bean.*;
import javax.faces.context.FacesContext;

import java.text.*;

@ManagedBean
@RequestScoped
public class UyeKayit {
private String isim;
private String soyisim;
private Date dogum_tarihi;
private String kullanici_adi;
private String email;
private String sifre;
private int telefonno;
private String adres;
private String bilgi="";
int i;

    public String getBilgi() {
        return bilgi;
    }
public String getIsim() {
	return isim;
}
public void setIsim(String isim) {
	this.isim = isim;
}
public String getSoyisim() {
	return soyisim;
}
public void setSoyisim(String soyisim) {
	this.soyisim = soyisim;
}

public Date getDogum_tarihi() {
	return dogum_tarihi;
}
public void setDogum_tarihi(Date dogum_tarihi) {
	this.dogum_tarihi = dogum_tarihi;
}
public String getKullanici_adi() {
	return kullanici_adi;
}
public void setKullanici_adi(String kullanici_adi) {
	this.kullanici_adi = kullanici_adi;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}

public String getSifre() {
	return sifre;
}
public void setSifre(String sifre) {
	this.sifre = sifre;
}

public int getTelefonno() {
	return telefonno;
}
public void setTelefonno(int telefonno) {
	this.telefonno = telefonno;
}
public String getAdres() {
	return adres;
}
public void setAdres(String adres) {
	this.adres = adres;
}
  public void veritabaninaaktar()
  {
	  SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");
	  PreparedStatement ps = null;
	  Connection con = null;
	  try{
	  Class.forName("com.mysql.jdbc.Driver");
	  con = DriverManager.getConnection("jdbc:mysql://localhost:3306/record", "ilkay", "13579");
	  String sql = "INSERT INTO uyeler(isim,soyisim,dogum_tarihi,kullanici_adi,e_mail,sifre,telefonno,adres) VALUES(?,?,?,?,?,?,?,?)";
	  ps= con.prepareStatement(sql);
	  ps.setString(1, isim);
	  ps.setString(2, soyisim);
	  String date = fmt.format(dogum_tarihi);
	  java.sql.Date dt = java.sql.Date.valueOf(new String(date));
	  ps.setDate(3, dt);
	  ps.setString(4, kullanici_adi);
	  ps.setString(5,email);
	  ps.setString(6,sifre);
	  ps.setInt(7,telefonno);
	  ps.setString(8,adres);
	  i=ps.executeUpdate();
	  } 
	  catch(Exception e)
	  {
		  System.out.print(e);
	  }
	  finally
		{
			try
			{
			con.close();
			ps.close();
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
		}
          if(i>0)
          {
              bilgi="BİLGİLERİNİZ VERİ TABANINA KAYDEDİLDİ.TEŞEKKÜRLER";
          }
          else
          {
              bilgi="KAYIT SIRASINDA HATA OLUŞTU";
          }
  }
}
