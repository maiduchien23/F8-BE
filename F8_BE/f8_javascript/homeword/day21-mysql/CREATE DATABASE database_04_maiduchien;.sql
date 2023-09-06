CREATE DATABASE database_04_maiduchien;

USE `database_04_maiduchien`;

CREATE TABLE IF NOT EXISTS `khach_hang` (
  `MaKH` varchar(10) NOT NULL,
  `TenKH` varchar(50) NOT NULL,
  `DiaChi` varchar(200) NOT NULL,
  `SoDT` varchar(50) NOT NULL,
  PRIMARY KEY (`MaKH`),
  UNIQUE KEY `SoDT` (`SoDT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS `phong` (
  `MaPhong` varchar(10) NOT NULL,
  `LoaiPhong` varchar(50) NOT NULL,
  `SoKhachToiDa` int(11) NOT NULL,
  `GiaPhong` float NOT NULL,
  `MoTa` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`MaPhong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS `dich_vu_di_kem` (
  `MaDV` varchar(10) NOT NULL DEFAULT '',
  `TenDV` varchar(50) NOT NULL,
  `DonViTinh` varchar(10) NOT NULL,
  `DonGia` float NOT NULL,
  PRIMARY KEY (`MaDV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS `dat_phong` (
  `MaDatPhong` varchar(10) NOT NULL,
  `MaPhong` varchar(10) NOT NULL,
  `MaKH` varchar(10) NOT NULL,
  `NgayDat` timestamp NOT NULL,
  `GioBatDau` time NOT NULL,
  `GioKetThuc` time NOT NULL,
  `TienDatCoc` float NOT NULL,
  `GhiChu` varchar(200) DEFAULT NULL,
  `TrangThaiDat` varchar(50) NOT NULL,
  PRIMARY KEY (`MaDatPhong`),
  KEY `FK_dat_phong_phong` (`MaPhong`),
  KEY `FK_dat_phong_khach_hang` (`MaKH`),
  CONSTRAINT `FK_dat_phong_khach_hang` FOREIGN KEY (`MaKH`) REFERENCES `khach_hang` (`MaKH`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_dat_phong_phong` FOREIGN KEY (`MaPhong`) REFERENCES `phong` (`MaPhong`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS `chi_tiet_su_dung_dv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `MaDatPhong` varchar(10) NOT NULL,
  `MaDV` varchar(10) NOT NULL,
  `SoLuong` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_chi_tiet_su_dung_dv_dich_vu_di_kem` (`MaDV`),
  KEY `FK_chi_tiet_su_dung_dv_dat_phong` (`MaDatPhong`),
  CONSTRAINT `FK_chi_tiet_su_dung_dv_dat_phong` FOREIGN KEY (`MaDatPhong`) REFERENCES `dat_phong` (`MaDatPhong`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_chi_tiet_su_dung_dv_dich_vu_di_kem` FOREIGN KEY (`MaDV`) REFERENCES `dich_vu_di_kem` (`MaDV`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `dich_vu_di_kem` (`MaDV`, `TenDV`, `DonViTinh`, `DonGia`) VALUES
	('DV001', 'Beer', 'lon', 11000),
	('DV002', 'Nuoc ngot', 'lon', 8000),
	('DV003', 'Trai cay', 'dia', 35000),
	('DV004', 'Khan uot', 'cai', 2000);


INSERT INTO `khach_hang` (`MaKH`, `TenKH`, `DiaChi`, `SoDT`) VALUES
	('KH0001', 'Nguyen Van AB', 'Hoa xuan', '2313123123'),
	('KH0002', 'Nguyen Van B', 'Hoa hai', '0232323333'),
	('KH0003', 'Phan Van B', 'Cam le', '0383838338'),
	('KH0004', 'Phan Van B', 'Hoa xuan', '0232838238');


INSERT INTO `phong` (`MaPhong`, `LoaiPhong`, `SoKhachToiDa`, `GiaPhong`, `MoTa`) VALUES
	('P0001', 'Loai 1', 20, 40000, NULL),
	('P0002', 'Loai 1', 25, 100000, NULL),
	('P0003', 'Loai 2', 15, 70000, NULL),
	('P0004', 'Loai 3', 20, 70000, NULL);


INSERT INTO `dat_phong` (`MaDatPhong`, `MaPhong`, `MaKH`, `NgayDat`, `GioBatDau`, `GioKetThuc`, `TienDatCoc`, `GhiChu`, `TrangThaiDat`)
VALUES
    ('DP0001', 'P0001', 'KH0002', '2016-03-26 01:16:39', '11:00:00', '13:30:00', 100000, NULL, 'Da dat'),
    ('DP0002', 'P0001', 'KH0003', '2018-03-27 01:18:09', '17:15:00', '19:15:00', 50000, NULL, 'Da huy');


INSERT INTO `chi_tiet_su_dung_dv` (`MaDatPhong`, `MaDV`, `SoLuong`)
VALUES
    ('DP0001', 'DV001', 20),
    ('DP0001', 'DV003', 3),
    ('DP0001', 'DV002', 10);

SELECT MaDatPhong, MaDV, SoLuong FROM chi_tiet_su_dung_dv WHERE SoLuong > 3 AND SoLuong < 10;


UPDATE phong SET GiaPhong = GiaPhong + 10000 WHERE SoKhachToiDa > 10;


DELETE FROM dat_phong WHERE TrangThaiDat = 'Da huy';


SELECT TenKH FROM khach_hang WHERE (TenKH LIKE 'H%' OR TenKH LIKE 'N%' OR TenKH LIKE 'M%') AND (LENGTH(TenKH) <= 20);


SELECT TenKH FROM khach_hang GROUP BY TenKH HAVING COUNT(TenKH) >= 1;


SELECT * FROM dich_vu_di_kem WHERE (DonViTinh = 'lon' AND DonGia > 10000) OR (DonViTinh = 'cai' AND DonGia < 5000);


SELECT dp.MaDatPhong, dp.MaPhong, p.LoaiPhong, p.SoKhachToiDa, p.GiaPhong, kh.MaKH, kh.TenKH, kh.SoDT, dp.NgayDat, dp.GioBatDau, dp.GioKetThuc, ctsd.MaDV, ctsd.SoLuong, dvdk.DonGia 
FROM phong p 
INNER JOIN dat_phong dp ON p.MaPhong = dp.MaPhong
INNER JOIN khach_hang kh ON dp.MaKH = kh.MaKH
INNER JOIN chi_tiet_su_dung_dv ctsd ON dp.MaDatPhong = ctsd.MaDatPhong
INNER JOIN dich_vu_di_kem dvdk ON ctsd.MaDV = dvdk.MaDV WHERE (YEAR(dp.NgayDat) = 2016 OR YEAR(dp.NgayDat) = 2017) AND (p.GiaPhong > 50000);

