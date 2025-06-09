import express from 'express';
import { saveImage, getLatest, getAllImages } from '../controllers/imageController.js';

const router = express.Router();

// base64 이미지 업로드
router.post('/upload', saveImage);

// 최신 이미지 조회
router.get('/latest', getLatest);

// 전체 이미지 조회
router.get('/allImages', getAllImages);

export default router;
